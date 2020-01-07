import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StartKeyPhrasesDetectionJobRequest, StartKeyPhrasesDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartKeyPhrasesDetectionJobCommandInput = StartKeyPhrasesDetectionJobRequest;
export declare type StartKeyPhrasesDetectionJobCommandOutput = StartKeyPhrasesDetectionJobResponse & __MetadataBearer;
export declare class StartKeyPhrasesDetectionJobCommand extends $Command<StartKeyPhrasesDetectionJobCommandInput, StartKeyPhrasesDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StartKeyPhrasesDetectionJobCommandInput;
    constructor(input: StartKeyPhrasesDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartKeyPhrasesDetectionJobCommandInput, StartKeyPhrasesDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
