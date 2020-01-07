import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetBatchPredictionInput, GetBatchPredictionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBatchPredictionCommandInput = GetBatchPredictionInput;
export declare type GetBatchPredictionCommandOutput = GetBatchPredictionOutput & __MetadataBearer;
export declare class GetBatchPredictionCommand extends $Command<GetBatchPredictionCommandInput, GetBatchPredictionCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: GetBatchPredictionCommandInput;
    constructor(input: GetBatchPredictionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBatchPredictionCommandInput, GetBatchPredictionCommandOutput>;
    private serialize;
    private deserialize;
}
