import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateNotebookInstanceInput, CreateNotebookInstanceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateNotebookInstanceCommandInput = CreateNotebookInstanceInput;
export declare type CreateNotebookInstanceCommandOutput = CreateNotebookInstanceOutput & __MetadataBearer;
export declare class CreateNotebookInstanceCommand extends $Command<CreateNotebookInstanceCommandInput, CreateNotebookInstanceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateNotebookInstanceCommandInput;
    constructor(input: CreateNotebookInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNotebookInstanceCommandInput, CreateNotebookInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
