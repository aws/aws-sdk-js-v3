import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateNotebookInstanceLifecycleConfigInput, CreateNotebookInstanceLifecycleConfigOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateNotebookInstanceLifecycleConfigCommandInput = CreateNotebookInstanceLifecycleConfigInput;
export declare type CreateNotebookInstanceLifecycleConfigCommandOutput = CreateNotebookInstanceLifecycleConfigOutput & __MetadataBearer;
export declare class CreateNotebookInstanceLifecycleConfigCommand extends $Command<CreateNotebookInstanceLifecycleConfigCommandInput, CreateNotebookInstanceLifecycleConfigCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateNotebookInstanceLifecycleConfigCommandInput;
    constructor(input: CreateNotebookInstanceLifecycleConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNotebookInstanceLifecycleConfigCommandInput, CreateNotebookInstanceLifecycleConfigCommandOutput>;
    private serialize;
    private deserialize;
}
