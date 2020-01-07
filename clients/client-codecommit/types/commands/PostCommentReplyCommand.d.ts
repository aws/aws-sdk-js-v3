import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { PostCommentReplyInput, PostCommentReplyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PostCommentReplyCommandInput = PostCommentReplyInput;
export declare type PostCommentReplyCommandOutput = PostCommentReplyOutput & __MetadataBearer;
export declare class PostCommentReplyCommand extends $Command<PostCommentReplyCommandInput, PostCommentReplyCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: PostCommentReplyCommandInput;
    constructor(input: PostCommentReplyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PostCommentReplyCommandInput, PostCommentReplyCommandOutput>;
    private serialize;
    private deserialize;
}
