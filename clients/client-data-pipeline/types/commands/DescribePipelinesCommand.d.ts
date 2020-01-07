import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { DescribePipelinesInput, DescribePipelinesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePipelinesCommandInput = DescribePipelinesInput;
export declare type DescribePipelinesCommandOutput = DescribePipelinesOutput & __MetadataBearer;
export declare class DescribePipelinesCommand extends $Command<DescribePipelinesCommandInput, DescribePipelinesCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: DescribePipelinesCommandInput;
    constructor(input: DescribePipelinesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePipelinesCommandInput, DescribePipelinesCommandOutput>;
    private serialize;
    private deserialize;
}
