import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { PutPipelineDefinitionInput, PutPipelineDefinitionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutPipelineDefinitionCommandInput = PutPipelineDefinitionInput;
export declare type PutPipelineDefinitionCommandOutput = PutPipelineDefinitionOutput & __MetadataBearer;
export declare class PutPipelineDefinitionCommand extends $Command<PutPipelineDefinitionCommandInput, PutPipelineDefinitionCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: PutPipelineDefinitionCommandInput;
    constructor(input: PutPipelineDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutPipelineDefinitionCommandInput, PutPipelineDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
