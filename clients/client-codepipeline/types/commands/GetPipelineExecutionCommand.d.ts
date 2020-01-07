import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetPipelineExecutionInput, GetPipelineExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPipelineExecutionCommandInput = GetPipelineExecutionInput;
export declare type GetPipelineExecutionCommandOutput = GetPipelineExecutionOutput & __MetadataBearer;
export declare class GetPipelineExecutionCommand extends $Command<GetPipelineExecutionCommandInput, GetPipelineExecutionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: GetPipelineExecutionCommandInput;
    constructor(input: GetPipelineExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPipelineExecutionCommandInput, GetPipelineExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
