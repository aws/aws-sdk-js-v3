import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListSentimentDetectionJobsRequest, ListSentimentDetectionJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSentimentDetectionJobsCommandInput = ListSentimentDetectionJobsRequest;
export declare type ListSentimentDetectionJobsCommandOutput = ListSentimentDetectionJobsResponse & __MetadataBearer;
export declare class ListSentimentDetectionJobsCommand extends $Command<ListSentimentDetectionJobsCommandInput, ListSentimentDetectionJobsCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListSentimentDetectionJobsCommandInput;
    constructor(input: ListSentimentDetectionJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSentimentDetectionJobsCommandInput, ListSentimentDetectionJobsCommandOutput>;
    private serialize;
    private deserialize;
}
