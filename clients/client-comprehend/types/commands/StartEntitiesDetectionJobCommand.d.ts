import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StartEntitiesDetectionJobRequest, StartEntitiesDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartEntitiesDetectionJobCommandInput = StartEntitiesDetectionJobRequest;
export declare type StartEntitiesDetectionJobCommandOutput = StartEntitiesDetectionJobResponse & __MetadataBearer;
export declare class StartEntitiesDetectionJobCommand extends $Command<StartEntitiesDetectionJobCommandInput, StartEntitiesDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StartEntitiesDetectionJobCommandInput;
    constructor(input: StartEntitiesDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartEntitiesDetectionJobCommandInput, StartEntitiesDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
