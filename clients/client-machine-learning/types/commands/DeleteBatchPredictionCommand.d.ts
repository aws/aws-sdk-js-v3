import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteBatchPredictionInput, DeleteBatchPredictionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBatchPredictionCommandInput = DeleteBatchPredictionInput;
export declare type DeleteBatchPredictionCommandOutput = DeleteBatchPredictionOutput & __MetadataBearer;
export declare class DeleteBatchPredictionCommand extends $Command<DeleteBatchPredictionCommandInput, DeleteBatchPredictionCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DeleteBatchPredictionCommandInput;
    constructor(input: DeleteBatchPredictionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBatchPredictionCommandInput, DeleteBatchPredictionCommandOutput>;
    private serialize;
    private deserialize;
}
