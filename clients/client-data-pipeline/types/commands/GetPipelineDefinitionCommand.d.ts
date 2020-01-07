import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { GetPipelineDefinitionInput, GetPipelineDefinitionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPipelineDefinitionCommandInput = GetPipelineDefinitionInput;
export declare type GetPipelineDefinitionCommandOutput = GetPipelineDefinitionOutput & __MetadataBearer;
export declare class GetPipelineDefinitionCommand extends $Command<GetPipelineDefinitionCommandInput, GetPipelineDefinitionCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: GetPipelineDefinitionCommandInput;
    constructor(input: GetPipelineDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPipelineDefinitionCommandInput, GetPipelineDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
