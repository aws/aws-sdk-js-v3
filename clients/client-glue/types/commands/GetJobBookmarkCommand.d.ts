import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobBookmarkRequest, GetJobBookmarkResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetJobBookmarkCommandInput = GetJobBookmarkRequest;
export declare type GetJobBookmarkCommandOutput = GetJobBookmarkResponse & __MetadataBearer;
export declare class GetJobBookmarkCommand extends $Command<GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetJobBookmarkCommandInput;
    constructor(input: GetJobBookmarkCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput>;
    private serialize;
    private deserialize;
}
