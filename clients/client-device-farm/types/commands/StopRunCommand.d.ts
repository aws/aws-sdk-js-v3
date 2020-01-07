import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { StopRunRequest, StopRunResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopRunCommandInput = StopRunRequest;
export declare type StopRunCommandOutput = StopRunResult & __MetadataBearer;
export declare class StopRunCommand extends $Command<StopRunCommandInput, StopRunCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: StopRunCommandInput;
    constructor(input: StopRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopRunCommandInput, StopRunCommandOutput>;
    private serialize;
    private deserialize;
}
