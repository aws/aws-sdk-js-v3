import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StopDominantLanguageDetectionJobRequest, StopDominantLanguageDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopDominantLanguageDetectionJobCommandInput = StopDominantLanguageDetectionJobRequest;
export declare type StopDominantLanguageDetectionJobCommandOutput = StopDominantLanguageDetectionJobResponse & __MetadataBearer;
export declare class StopDominantLanguageDetectionJobCommand extends $Command<StopDominantLanguageDetectionJobCommandInput, StopDominantLanguageDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StopDominantLanguageDetectionJobCommandInput;
    constructor(input: StopDominantLanguageDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDominantLanguageDetectionJobCommandInput, StopDominantLanguageDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
