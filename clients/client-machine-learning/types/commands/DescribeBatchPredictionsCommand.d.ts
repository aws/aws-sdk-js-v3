import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeBatchPredictionsInput, DescribeBatchPredictionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeBatchPredictionsCommandInput = DescribeBatchPredictionsInput;
export declare type DescribeBatchPredictionsCommandOutput = DescribeBatchPredictionsOutput & __MetadataBearer;
export declare class DescribeBatchPredictionsCommand extends $Command<DescribeBatchPredictionsCommandInput, DescribeBatchPredictionsCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DescribeBatchPredictionsCommandInput;
    constructor(input: DescribeBatchPredictionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBatchPredictionsCommandInput, DescribeBatchPredictionsCommandOutput>;
    private serialize;
    private deserialize;
}
