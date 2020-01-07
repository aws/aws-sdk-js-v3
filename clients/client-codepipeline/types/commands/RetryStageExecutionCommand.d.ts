import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { RetryStageExecutionInput, RetryStageExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RetryStageExecutionCommandInput = RetryStageExecutionInput;
export declare type RetryStageExecutionCommandOutput = RetryStageExecutionOutput & __MetadataBearer;
export declare class RetryStageExecutionCommand extends $Command<RetryStageExecutionCommandInput, RetryStageExecutionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: RetryStageExecutionCommandInput;
    constructor(input: RetryStageExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetryStageExecutionCommandInput, RetryStageExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
