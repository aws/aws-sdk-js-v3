import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccessKeyLastUsedRequest, GetAccessKeyLastUsedResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccessKeyLastUsedCommandInput = GetAccessKeyLastUsedRequest;
export declare type GetAccessKeyLastUsedCommandOutput = GetAccessKeyLastUsedResponse & __MetadataBearer;
export declare class GetAccessKeyLastUsedCommand extends $Command<GetAccessKeyLastUsedCommandInput, GetAccessKeyLastUsedCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetAccessKeyLastUsedCommandInput;
    constructor(input: GetAccessKeyLastUsedCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccessKeyLastUsedCommandInput, GetAccessKeyLastUsedCommandOutput>;
    private serialize;
    private deserialize;
}
