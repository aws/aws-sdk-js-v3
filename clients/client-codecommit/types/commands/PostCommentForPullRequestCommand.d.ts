import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { PostCommentForPullRequestInput, PostCommentForPullRequestOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PostCommentForPullRequestCommandInput = PostCommentForPullRequestInput;
export declare type PostCommentForPullRequestCommandOutput = PostCommentForPullRequestOutput & __MetadataBearer;
export declare class PostCommentForPullRequestCommand extends $Command<PostCommentForPullRequestCommandInput, PostCommentForPullRequestCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: PostCommentForPullRequestCommandInput;
    constructor(input: PostCommentForPullRequestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PostCommentForPullRequestCommandInput, PostCommentForPullRequestCommandOutput>;
    private serialize;
    private deserialize;
}
