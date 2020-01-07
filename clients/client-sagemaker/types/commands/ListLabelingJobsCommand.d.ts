import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListLabelingJobsRequest, ListLabelingJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLabelingJobsCommandInput = ListLabelingJobsRequest;
export declare type ListLabelingJobsCommandOutput = ListLabelingJobsResponse & __MetadataBearer;
export declare class ListLabelingJobsCommand extends $Command<ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListLabelingJobsCommandInput;
    constructor(input: ListLabelingJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput>;
    private serialize;
    private deserialize;
}
