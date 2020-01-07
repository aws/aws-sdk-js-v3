import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StopEntitiesDetectionJobRequest, StopEntitiesDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopEntitiesDetectionJobCommandInput = StopEntitiesDetectionJobRequest;
export declare type StopEntitiesDetectionJobCommandOutput = StopEntitiesDetectionJobResponse & __MetadataBearer;
export declare class StopEntitiesDetectionJobCommand extends $Command<StopEntitiesDetectionJobCommandInput, StopEntitiesDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StopEntitiesDetectionJobCommandInput;
    constructor(input: StopEntitiesDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopEntitiesDetectionJobCommandInput, StopEntitiesDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
