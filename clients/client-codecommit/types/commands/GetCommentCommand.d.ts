import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommentInput, GetCommentOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCommentCommandInput = GetCommentInput;
export declare type GetCommentCommandOutput = GetCommentOutput & __MetadataBearer;
export declare class GetCommentCommand extends $Command<GetCommentCommandInput, GetCommentCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetCommentCommandInput;
    constructor(input: GetCommentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCommentCommandInput, GetCommentCommandOutput>;
    private serialize;
    private deserialize;
}
