import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetTestRequest, GetTestResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTestCommandInput = GetTestRequest;
export declare type GetTestCommandOutput = GetTestResult & __MetadataBearer;
export declare class GetTestCommand extends $Command<GetTestCommandInput, GetTestCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetTestCommandInput;
    constructor(input: GetTestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTestCommandInput, GetTestCommandOutput>;
    private serialize;
    private deserialize;
}
