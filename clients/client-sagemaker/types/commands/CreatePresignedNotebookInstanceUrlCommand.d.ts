import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreatePresignedNotebookInstanceUrlInput, CreatePresignedNotebookInstanceUrlOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePresignedNotebookInstanceUrlCommandInput = CreatePresignedNotebookInstanceUrlInput;
export declare type CreatePresignedNotebookInstanceUrlCommandOutput = CreatePresignedNotebookInstanceUrlOutput & __MetadataBearer;
export declare class CreatePresignedNotebookInstanceUrlCommand extends $Command<CreatePresignedNotebookInstanceUrlCommandInput, CreatePresignedNotebookInstanceUrlCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreatePresignedNotebookInstanceUrlCommandInput;
    constructor(input: CreatePresignedNotebookInstanceUrlCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePresignedNotebookInstanceUrlCommandInput, CreatePresignedNotebookInstanceUrlCommandOutput>;
    private serialize;
    private deserialize;
}
