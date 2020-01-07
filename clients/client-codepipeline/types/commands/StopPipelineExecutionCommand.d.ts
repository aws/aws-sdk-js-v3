import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { StopPipelineExecutionInput, StopPipelineExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopPipelineExecutionCommandInput = StopPipelineExecutionInput;
export declare type StopPipelineExecutionCommandOutput = StopPipelineExecutionOutput & __MetadataBearer;
export declare class StopPipelineExecutionCommand extends $Command<StopPipelineExecutionCommandInput, StopPipelineExecutionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: StopPipelineExecutionCommandInput;
    constructor(input: StopPipelineExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopPipelineExecutionCommandInput, StopPipelineExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
