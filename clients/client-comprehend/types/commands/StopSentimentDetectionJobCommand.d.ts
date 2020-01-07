import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StopSentimentDetectionJobRequest, StopSentimentDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopSentimentDetectionJobCommandInput = StopSentimentDetectionJobRequest;
export declare type StopSentimentDetectionJobCommandOutput = StopSentimentDetectionJobResponse & __MetadataBearer;
export declare class StopSentimentDetectionJobCommand extends $Command<StopSentimentDetectionJobCommandInput, StopSentimentDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StopSentimentDetectionJobCommandInput;
    constructor(input: StopSentimentDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopSentimentDetectionJobCommandInput, StopSentimentDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
