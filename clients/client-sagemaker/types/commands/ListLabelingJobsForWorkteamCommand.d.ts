import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListLabelingJobsForWorkteamRequest, ListLabelingJobsForWorkteamResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLabelingJobsForWorkteamCommandInput = ListLabelingJobsForWorkteamRequest;
export declare type ListLabelingJobsForWorkteamCommandOutput = ListLabelingJobsForWorkteamResponse & __MetadataBearer;
export declare class ListLabelingJobsForWorkteamCommand extends $Command<ListLabelingJobsForWorkteamCommandInput, ListLabelingJobsForWorkteamCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListLabelingJobsForWorkteamCommandInput;
    constructor(input: ListLabelingJobsForWorkteamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLabelingJobsForWorkteamCommandInput, ListLabelingJobsForWorkteamCommandOutput>;
    private serialize;
    private deserialize;
}
