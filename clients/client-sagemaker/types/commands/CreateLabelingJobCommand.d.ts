import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateLabelingJobRequest, CreateLabelingJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLabelingJobCommandInput = CreateLabelingJobRequest;
export declare type CreateLabelingJobCommandOutput = CreateLabelingJobResponse & __MetadataBearer;
export declare class CreateLabelingJobCommand extends $Command<CreateLabelingJobCommandInput, CreateLabelingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateLabelingJobCommandInput;
    constructor(input: CreateLabelingJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLabelingJobCommandInput, CreateLabelingJobCommandOutput>;
    private serialize;
    private deserialize;
}
