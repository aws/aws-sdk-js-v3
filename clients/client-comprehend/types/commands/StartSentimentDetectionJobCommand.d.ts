import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StartSentimentDetectionJobRequest, StartSentimentDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartSentimentDetectionJobCommandInput = StartSentimentDetectionJobRequest;
export declare type StartSentimentDetectionJobCommandOutput = StartSentimentDetectionJobResponse & __MetadataBearer;
export declare class StartSentimentDetectionJobCommand extends $Command<StartSentimentDetectionJobCommandInput, StartSentimentDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StartSentimentDetectionJobCommandInput;
    constructor(input: StartSentimentDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSentimentDetectionJobCommandInput, StartSentimentDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
