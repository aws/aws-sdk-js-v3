import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { StartPipelineExecutionInput, StartPipelineExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartPipelineExecutionCommandInput = StartPipelineExecutionInput;
export declare type StartPipelineExecutionCommandOutput = StartPipelineExecutionOutput & __MetadataBearer;
export declare class StartPipelineExecutionCommand extends $Command<StartPipelineExecutionCommandInput, StartPipelineExecutionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: StartPipelineExecutionCommandInput;
    constructor(input: StartPipelineExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartPipelineExecutionCommandInput, StartPipelineExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
