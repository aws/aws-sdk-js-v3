import "reflect-metadata";

import { describe, expect, it, vi } from "vitest";

import { DataMapper } from "../../DataMapper";
import { isSchema } from "../item";
import { DynamoDbSchema } from "../symbols";
import { Author, Comment, Post } from "./exampleSchema.fixture";

vi.mock("uuid", () => ({ v4: vi.fn(() => "uuid") }));

describe("annotations", () => {
  it("should create a schema that includes references to property schemas", () => {
    const postSchema = (Post.prototype as any)[DynamoDbSchema];
    expect(isSchema(postSchema)).toBe(true);
    expect(isSchema(postSchema.author.members)).toBe(true);
    expect(isSchema(postSchema.replies.memberType.members)).toBe(true);
  });

  it("should support recursive shapes in the generated schema", () => {
    const commentSchema = (Comment.prototype as any)[DynamoDbSchema];
    expect(isSchema(commentSchema)).toBe(true);
    expect(isSchema(commentSchema.replies.memberType.members)).toBe(true);
    expect(commentSchema.replies.memberType.members).toBe(commentSchema);
  });

  //lets skip this for now, as we need to test this with expressions
  it.skip("should marshall a full object graph according to the schema", async () => {
    const mockDynamoDbClient = {
      send: vi.fn().mockResolvedValue({ Attributes: undefined }),
    };

    const mapper = DataMapper.from(Post, {
      client: mockDynamoDbClient as any,
    });

    const post = new Post();
    post.createdAt = new Date(0);
    post.author = new Author();
    post.author.name = "John Smith";
    post.author.photo = Uint8Array.from([0xde, 0xad, 0xbe, 0xef]);
    post.author.socialMediaHandles = new Map([
      ["github", "john_smith_27834231"],
      ["twitter", "theRealJohnSmith"],
    ]);
    post.title = "Review of Rob Loblaw's Law Blog";
    post.subtitle = "Does it live up to the hype?";
    post.content = "It's a great law blog.";
    post.corrections = ["The first edition of this post did not adequately attest to the law blog's greatness."];
    post.replies = [new Comment()];

    post.replies[0].author = "Rob Loblaw";
    post.replies[0].timestamp = new Date(0);
    post.replies[0].subject = "Great review";
    post.replies[0].text = "Appreciate the congrats";
    post.replies[0].upvotes = 35;
    post.replies[0].downvotes = 0;
    post.replies[0].approved = true;

    const reply = new Comment();
    reply.author = "John Smith";
    reply.timestamp = new Date(60000);
    reply.subject = "Great review of my review";
    reply.text = "Thanks for reading!";
    reply.approved = true;

    post.replies[0].replies = [reply];

    await mapper.put(post);

    const input = mockDynamoDbClient.send.mock.calls[0][0].input;

    expect(input).toMatchObject({
      ConditionExpression: "attribute_not_exists(#attr0)",
      ExpressionAttributeNames: { "#attr0": "version" },
      TableName: "Posts",
      Item: expect.objectContaining({
        author: expect.any(Object),
        content: { S: "It's a great law blog." },
        corrections: {
          L: [
            {
              S: "The first edition of this post did not adequately attest to the law blog's greatness.",
            },
          ],
        },
        createdAt: { N: "0" },
        id: { S: "uuid" },
        replies: expect.any(Object),
        subtitle: { S: "Does it live up to the hype?" },
        title: { S: "Review of Rob Loblaw's Law Blog" },
        version: { N: "0" },
      }),
    });
  });
});
