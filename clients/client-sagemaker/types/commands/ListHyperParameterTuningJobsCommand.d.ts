import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListHyperParameterTuningJobsRequest, ListHyperParameterTuningJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListHyperParameterTuningJobsCommandInput = ListHyperParameterTuningJobsRequest;
export declare type ListHyperParameterTuningJobsCommandOutput = ListHyperParameterTuningJobsResponse & __MetadataBearer;
export declare class ListHyperParameterTuningJobsCommand extends $Command<ListHyperParameterTuningJobsCommandInput, ListHyperParameterTuningJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListHyperParameterTuningJobsCommandInput;
    constructor(input: ListHyperParameterTuningJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHyperParameterTuningJobsCommandInput, ListHyperParameterTuningJobsCommandOutput>;
    private serialize;
    private deserialize;
}
