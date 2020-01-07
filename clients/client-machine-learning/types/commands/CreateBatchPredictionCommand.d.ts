import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateBatchPredictionInput, CreateBatchPredictionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateBatchPredictionCommandInput = CreateBatchPredictionInput;
export declare type CreateBatchPredictionCommandOutput = CreateBatchPredictionOutput & __MetadataBearer;
export declare class CreateBatchPredictionCommand extends $Command<CreateBatchPredictionCommandInput, CreateBatchPredictionCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: CreateBatchPredictionCommandInput;
    constructor(input: CreateBatchPredictionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBatchPredictionCommandInput, CreateBatchPredictionCommandOutput>;
    private serialize;
    private deserialize;
}
