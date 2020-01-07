import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { StopJobRequest, StopJobResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopJobCommandInput = StopJobRequest;
export declare type StopJobCommandOutput = StopJobResult & __MetadataBearer;
export declare class StopJobCommand extends $Command<StopJobCommandInput, StopJobCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: StopJobCommandInput;
    constructor(input: StopJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopJobCommandInput, StopJobCommandOutput>;
    private serialize;
    private deserialize;
}
