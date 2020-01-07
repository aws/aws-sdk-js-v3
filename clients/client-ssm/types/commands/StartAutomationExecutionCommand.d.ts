import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { StartAutomationExecutionRequest, StartAutomationExecutionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartAutomationExecutionCommandInput = StartAutomationExecutionRequest;
export declare type StartAutomationExecutionCommandOutput = StartAutomationExecutionResult & __MetadataBearer;
export declare class StartAutomationExecutionCommand extends $Command<StartAutomationExecutionCommandInput, StartAutomationExecutionCommandOutput, SSMClientResolvedConfig> {
    readonly input: StartAutomationExecutionCommandInput;
    constructor(input: StartAutomationExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAutomationExecutionCommandInput, StartAutomationExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
