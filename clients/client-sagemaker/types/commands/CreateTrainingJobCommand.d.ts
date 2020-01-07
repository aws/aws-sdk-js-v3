import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateTrainingJobRequest, CreateTrainingJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrainingJobCommandInput = CreateTrainingJobRequest;
export declare type CreateTrainingJobCommandOutput = CreateTrainingJobResponse & __MetadataBearer;
export declare class CreateTrainingJobCommand extends $Command<CreateTrainingJobCommandInput, CreateTrainingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateTrainingJobCommandInput;
    constructor(input: CreateTrainingJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrainingJobCommandInput, CreateTrainingJobCommandOutput>;
    private serialize;
    private deserialize;
}
