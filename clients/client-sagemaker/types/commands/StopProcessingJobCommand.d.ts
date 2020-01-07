import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopProcessingJobRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopProcessingJobCommandInput = StopProcessingJobRequest;
export declare type StopProcessingJobCommandOutput = __MetadataBearer;
export declare class StopProcessingJobCommand extends $Command<StopProcessingJobCommandInput, StopProcessingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopProcessingJobCommandInput;
    constructor(input: StopProcessingJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopProcessingJobCommandInput, StopProcessingJobCommandOutput>;
    private serialize;
    private deserialize;
}
