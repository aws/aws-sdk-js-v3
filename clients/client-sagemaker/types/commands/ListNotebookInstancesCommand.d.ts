import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListNotebookInstancesInput, ListNotebookInstancesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListNotebookInstancesCommandInput = ListNotebookInstancesInput;
export declare type ListNotebookInstancesCommandOutput = ListNotebookInstancesOutput & __MetadataBearer;
export declare class ListNotebookInstancesCommand extends $Command<ListNotebookInstancesCommandInput, ListNotebookInstancesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListNotebookInstancesCommandInput;
    constructor(input: ListNotebookInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNotebookInstancesCommandInput, ListNotebookInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
