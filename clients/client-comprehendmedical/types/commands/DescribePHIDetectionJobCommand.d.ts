import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { DescribePHIDetectionJobRequest, DescribePHIDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePHIDetectionJobCommandInput = DescribePHIDetectionJobRequest;
export declare type DescribePHIDetectionJobCommandOutput = DescribePHIDetectionJobResponse & __MetadataBearer;
export declare class DescribePHIDetectionJobCommand extends $Command<DescribePHIDetectionJobCommandInput, DescribePHIDetectionJobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: DescribePHIDetectionJobCommandInput;
    constructor(input: DescribePHIDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePHIDetectionJobCommandInput, DescribePHIDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
