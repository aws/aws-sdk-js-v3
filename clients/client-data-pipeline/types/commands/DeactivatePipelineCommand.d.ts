import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { DeactivatePipelineInput, DeactivatePipelineOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeactivatePipelineCommandInput = DeactivatePipelineInput;
export declare type DeactivatePipelineCommandOutput = DeactivatePipelineOutput & __MetadataBearer;
export declare class DeactivatePipelineCommand extends $Command<DeactivatePipelineCommandInput, DeactivatePipelineCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: DeactivatePipelineCommandInput;
    constructor(input: DeactivatePipelineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeactivatePipelineCommandInput, DeactivatePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
