import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { ValidatePipelineDefinitionInput, ValidatePipelineDefinitionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ValidatePipelineDefinitionCommandInput = ValidatePipelineDefinitionInput;
export declare type ValidatePipelineDefinitionCommandOutput = ValidatePipelineDefinitionOutput & __MetadataBearer;
export declare class ValidatePipelineDefinitionCommand extends $Command<ValidatePipelineDefinitionCommandInput, ValidatePipelineDefinitionCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: ValidatePipelineDefinitionCommandInput;
    constructor(input: ValidatePipelineDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ValidatePipelineDefinitionCommandInput, ValidatePipelineDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
