import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTrainingJobsRequest, ListTrainingJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTrainingJobsCommandInput = ListTrainingJobsRequest;
export declare type ListTrainingJobsCommandOutput = ListTrainingJobsResponse & __MetadataBearer;
export declare class ListTrainingJobsCommand extends $Command<ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListTrainingJobsCommandInput;
    constructor(input: ListTrainingJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput>;
    private serialize;
    private deserialize;
}
