import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeSentimentDetectionJobRequest, DescribeSentimentDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSentimentDetectionJobCommandInput = DescribeSentimentDetectionJobRequest;
export declare type DescribeSentimentDetectionJobCommandOutput = DescribeSentimentDetectionJobResponse & __MetadataBearer;
export declare class DescribeSentimentDetectionJobCommand extends $Command<DescribeSentimentDetectionJobCommandInput, DescribeSentimentDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DescribeSentimentDetectionJobCommandInput;
    constructor(input: DescribeSentimentDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSentimentDetectionJobCommandInput, DescribeSentimentDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
