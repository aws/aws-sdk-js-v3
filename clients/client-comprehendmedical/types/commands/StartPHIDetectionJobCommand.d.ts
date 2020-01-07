import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { StartPHIDetectionJobRequest, StartPHIDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartPHIDetectionJobCommandInput = StartPHIDetectionJobRequest;
export declare type StartPHIDetectionJobCommandOutput = StartPHIDetectionJobResponse & __MetadataBearer;
export declare class StartPHIDetectionJobCommand extends $Command<StartPHIDetectionJobCommandInput, StartPHIDetectionJobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: StartPHIDetectionJobCommandInput;
    constructor(input: StartPHIDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartPHIDetectionJobCommandInput, StartPHIDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
