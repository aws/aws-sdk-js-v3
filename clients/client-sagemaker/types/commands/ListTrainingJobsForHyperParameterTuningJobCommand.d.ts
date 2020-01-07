import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTrainingJobsForHyperParameterTuningJobRequest, ListTrainingJobsForHyperParameterTuningJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTrainingJobsForHyperParameterTuningJobCommandInput = ListTrainingJobsForHyperParameterTuningJobRequest;
export declare type ListTrainingJobsForHyperParameterTuningJobCommandOutput = ListTrainingJobsForHyperParameterTuningJobResponse & __MetadataBearer;
export declare class ListTrainingJobsForHyperParameterTuningJobCommand extends $Command<ListTrainingJobsForHyperParameterTuningJobCommandInput, ListTrainingJobsForHyperParameterTuningJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListTrainingJobsForHyperParameterTuningJobCommandInput;
    constructor(input: ListTrainingJobsForHyperParameterTuningJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrainingJobsForHyperParameterTuningJobCommandInput, ListTrainingJobsForHyperParameterTuningJobCommandOutput>;
    private serialize;
    private deserialize;
}
