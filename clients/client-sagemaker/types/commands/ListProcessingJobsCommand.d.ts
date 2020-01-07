import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListProcessingJobsRequest, ListProcessingJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListProcessingJobsCommandInput = ListProcessingJobsRequest;
export declare type ListProcessingJobsCommandOutput = ListProcessingJobsResponse & __MetadataBearer;
export declare class ListProcessingJobsCommand extends $Command<ListProcessingJobsCommandInput, ListProcessingJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListProcessingJobsCommandInput;
    constructor(input: ListProcessingJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProcessingJobsCommandInput, ListProcessingJobsCommandOutput>;
    private serialize;
    private deserialize;
}
