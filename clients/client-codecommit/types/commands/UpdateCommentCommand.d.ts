import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateCommentInput, UpdateCommentOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCommentCommandInput = UpdateCommentInput;
export declare type UpdateCommentCommandOutput = UpdateCommentOutput & __MetadataBearer;
export declare class UpdateCommentCommand extends $Command<UpdateCommentCommandInput, UpdateCommentCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdateCommentCommandInput;
    constructor(input: UpdateCommentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCommentCommandInput, UpdateCommentCommandOutput>;
    private serialize;
    private deserialize;
}
