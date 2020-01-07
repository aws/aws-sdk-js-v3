import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StopKeyPhrasesDetectionJobRequest, StopKeyPhrasesDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopKeyPhrasesDetectionJobCommandInput = StopKeyPhrasesDetectionJobRequest;
export declare type StopKeyPhrasesDetectionJobCommandOutput = StopKeyPhrasesDetectionJobResponse & __MetadataBearer;
export declare class StopKeyPhrasesDetectionJobCommand extends $Command<StopKeyPhrasesDetectionJobCommandInput, StopKeyPhrasesDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StopKeyPhrasesDetectionJobCommandInput;
    constructor(input: StopKeyPhrasesDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopKeyPhrasesDetectionJobCommandInput, StopKeyPhrasesDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
