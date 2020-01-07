import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateCodeRepositoryInput, CreateCodeRepositoryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCodeRepositoryCommandInput = CreateCodeRepositoryInput;
export declare type CreateCodeRepositoryCommandOutput = CreateCodeRepositoryOutput & __MetadataBearer;
export declare class CreateCodeRepositoryCommand extends $Command<CreateCodeRepositoryCommandInput, CreateCodeRepositoryCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateCodeRepositoryCommandInput;
    constructor(input: CreateCodeRepositoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCodeRepositoryCommandInput, CreateCodeRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
