import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ResetJobBookmarkRequest, ResetJobBookmarkResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetJobBookmarkCommandInput = ResetJobBookmarkRequest;
export declare type ResetJobBookmarkCommandOutput = ResetJobBookmarkResponse & __MetadataBearer;
export declare class ResetJobBookmarkCommand extends $Command<ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput, GlueClientResolvedConfig> {
    readonly input: ResetJobBookmarkCommandInput;
    constructor(input: ResetJobBookmarkCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput>;
    private serialize;
    private deserialize;
}
