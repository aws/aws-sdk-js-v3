import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { PostCommentForComparedCommitInput, PostCommentForComparedCommitOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PostCommentForComparedCommitCommandInput = PostCommentForComparedCommitInput;
export declare type PostCommentForComparedCommitCommandOutput = PostCommentForComparedCommitOutput & __MetadataBearer;
export declare class PostCommentForComparedCommitCommand extends $Command<PostCommentForComparedCommitCommandInput, PostCommentForComparedCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: PostCommentForComparedCommitCommandInput;
    constructor(input: PostCommentForComparedCommitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PostCommentForComparedCommitCommandInput, PostCommentForComparedCommitCommandOutput>;
    private serialize;
    private deserialize;
}
