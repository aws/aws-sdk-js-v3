import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetSuiteRequest, GetSuiteResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSuiteCommandInput = GetSuiteRequest;
export declare type GetSuiteCommandOutput = GetSuiteResult & __MetadataBearer;
export declare class GetSuiteCommand extends $Command<GetSuiteCommandInput, GetSuiteCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetSuiteCommandInput;
    constructor(input: GetSuiteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSuiteCommandInput, GetSuiteCommandOutput>;
    private serialize;
    private deserialize;
}
