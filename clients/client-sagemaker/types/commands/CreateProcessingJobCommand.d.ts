import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateProcessingJobRequest, CreateProcessingJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateProcessingJobCommandInput = CreateProcessingJobRequest;
export declare type CreateProcessingJobCommandOutput = CreateProcessingJobResponse & __MetadataBearer;
export declare class CreateProcessingJobCommand extends $Command<CreateProcessingJobCommandInput, CreateProcessingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateProcessingJobCommandInput;
    constructor(input: CreateProcessingJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProcessingJobCommandInput, CreateProcessingJobCommandOutput>;
    private serialize;
    private deserialize;
}
