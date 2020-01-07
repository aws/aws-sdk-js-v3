import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { StopAutomationExecutionRequest, StopAutomationExecutionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopAutomationExecutionCommandInput = StopAutomationExecutionRequest;
export declare type StopAutomationExecutionCommandOutput = StopAutomationExecutionResult & __MetadataBearer;
export declare class StopAutomationExecutionCommand extends $Command<StopAutomationExecutionCommandInput, StopAutomationExecutionCommandOutput, SSMClientResolvedConfig> {
    readonly input: StopAutomationExecutionCommandInput;
    constructor(input: StopAutomationExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopAutomationExecutionCommandInput, StopAutomationExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
