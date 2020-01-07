import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListNotebookInstanceLifecycleConfigsInput, ListNotebookInstanceLifecycleConfigsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListNotebookInstanceLifecycleConfigsCommandInput = ListNotebookInstanceLifecycleConfigsInput;
export declare type ListNotebookInstanceLifecycleConfigsCommandOutput = ListNotebookInstanceLifecycleConfigsOutput & __MetadataBearer;
export declare class ListNotebookInstanceLifecycleConfigsCommand extends $Command<ListNotebookInstanceLifecycleConfigsCommandInput, ListNotebookInstanceLifecycleConfigsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListNotebookInstanceLifecycleConfigsCommandInput;
    constructor(input: ListNotebookInstanceLifecycleConfigsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNotebookInstanceLifecycleConfigsCommandInput, ListNotebookInstanceLifecycleConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
