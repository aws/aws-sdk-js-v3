import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { ActivatePipelineInput, ActivatePipelineOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ActivatePipelineCommandInput = ActivatePipelineInput;
export declare type ActivatePipelineCommandOutput = ActivatePipelineOutput & __MetadataBearer;
export declare class ActivatePipelineCommand extends $Command<ActivatePipelineCommandInput, ActivatePipelineCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: ActivatePipelineCommandInput;
    constructor(input: ActivatePipelineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ActivatePipelineCommandInput, ActivatePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
