import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteNotebookInstanceLifecycleConfigInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNotebookInstanceLifecycleConfigCommandInput = DeleteNotebookInstanceLifecycleConfigInput;
export declare type DeleteNotebookInstanceLifecycleConfigCommandOutput = __MetadataBearer;
export declare class DeleteNotebookInstanceLifecycleConfigCommand extends $Command<DeleteNotebookInstanceLifecycleConfigCommandInput, DeleteNotebookInstanceLifecycleConfigCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteNotebookInstanceLifecycleConfigCommandInput;
    constructor(input: DeleteNotebookInstanceLifecycleConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNotebookInstanceLifecycleConfigCommandInput, DeleteNotebookInstanceLifecycleConfigCommandOutput>;
    private serialize;
    private deserialize;
}
