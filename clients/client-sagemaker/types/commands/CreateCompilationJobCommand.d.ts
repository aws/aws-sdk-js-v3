import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateCompilationJobRequest, CreateCompilationJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCompilationJobCommandInput = CreateCompilationJobRequest;
export declare type CreateCompilationJobCommandOutput = CreateCompilationJobResponse & __MetadataBearer;
export declare class CreateCompilationJobCommand extends $Command<CreateCompilationJobCommandInput, CreateCompilationJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateCompilationJobCommandInput;
    constructor(input: CreateCompilationJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCompilationJobCommandInput, CreateCompilationJobCommandOutput>;
    private serialize;
    private deserialize;
}
