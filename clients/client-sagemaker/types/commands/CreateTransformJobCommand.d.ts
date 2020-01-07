import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateTransformJobRequest, CreateTransformJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTransformJobCommandInput = CreateTransformJobRequest;
export declare type CreateTransformJobCommandOutput = CreateTransformJobResponse & __MetadataBearer;
export declare class CreateTransformJobCommand extends $Command<CreateTransformJobCommandInput, CreateTransformJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateTransformJobCommandInput;
    constructor(input: CreateTransformJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransformJobCommandInput, CreateTransformJobCommandOutput>;
    private serialize;
    private deserialize;
}
