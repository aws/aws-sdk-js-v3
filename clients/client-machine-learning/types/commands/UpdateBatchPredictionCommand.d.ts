import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { UpdateBatchPredictionInput, UpdateBatchPredictionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateBatchPredictionCommandInput = UpdateBatchPredictionInput;
export declare type UpdateBatchPredictionCommandOutput = UpdateBatchPredictionOutput & __MetadataBearer;
export declare class UpdateBatchPredictionCommand extends $Command<UpdateBatchPredictionCommandInput, UpdateBatchPredictionCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: UpdateBatchPredictionCommandInput;
    constructor(input: UpdateBatchPredictionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBatchPredictionCommandInput, UpdateBatchPredictionCommandOutput>;
    private serialize;
    private deserialize;
}
