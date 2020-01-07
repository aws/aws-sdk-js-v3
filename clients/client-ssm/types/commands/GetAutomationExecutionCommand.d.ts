import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetAutomationExecutionRequest, GetAutomationExecutionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAutomationExecutionCommandInput = GetAutomationExecutionRequest;
export declare type GetAutomationExecutionCommandOutput = GetAutomationExecutionResult & __MetadataBearer;
export declare class GetAutomationExecutionCommand extends $Command<GetAutomationExecutionCommandInput, GetAutomationExecutionCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetAutomationExecutionCommandInput;
    constructor(input: GetAutomationExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAutomationExecutionCommandInput, GetAutomationExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
