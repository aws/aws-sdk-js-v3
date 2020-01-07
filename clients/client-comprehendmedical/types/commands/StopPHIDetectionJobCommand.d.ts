import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { StopPHIDetectionJobRequest, StopPHIDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopPHIDetectionJobCommandInput = StopPHIDetectionJobRequest;
export declare type StopPHIDetectionJobCommandOutput = StopPHIDetectionJobResponse & __MetadataBearer;
export declare class StopPHIDetectionJobCommand extends $Command<StopPHIDetectionJobCommandInput, StopPHIDetectionJobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: StopPHIDetectionJobCommandInput;
    constructor(input: StopPHIDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopPHIDetectionJobCommandInput, StopPHIDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
