import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StartTopicsDetectionJobRequest, StartTopicsDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartTopicsDetectionJobCommandInput = StartTopicsDetectionJobRequest;
export declare type StartTopicsDetectionJobCommandOutput = StartTopicsDetectionJobResponse & __MetadataBearer;
export declare class StartTopicsDetectionJobCommand extends $Command<StartTopicsDetectionJobCommandInput, StartTopicsDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StartTopicsDetectionJobCommandInput;
    constructor(input: StartTopicsDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTopicsDetectionJobCommandInput, StartTopicsDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
