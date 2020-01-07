import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeleteCommentContentInput, DeleteCommentContentOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCommentContentCommandInput = DeleteCommentContentInput;
export declare type DeleteCommentContentCommandOutput = DeleteCommentContentOutput & __MetadataBearer;
export declare class DeleteCommentContentCommand extends $Command<DeleteCommentContentCommandInput, DeleteCommentContentCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeleteCommentContentCommandInput;
    constructor(input: DeleteCommentContentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCommentContentCommandInput, DeleteCommentContentCommandOutput>;
    private serialize;
    private deserialize;
}
