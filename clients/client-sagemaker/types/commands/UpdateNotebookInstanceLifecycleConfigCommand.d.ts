import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateNotebookInstanceLifecycleConfigInput, UpdateNotebookInstanceLifecycleConfigOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateNotebookInstanceLifecycleConfigCommandInput = UpdateNotebookInstanceLifecycleConfigInput;
export declare type UpdateNotebookInstanceLifecycleConfigCommandOutput = UpdateNotebookInstanceLifecycleConfigOutput & __MetadataBearer;
export declare class UpdateNotebookInstanceLifecycleConfigCommand extends $Command<UpdateNotebookInstanceLifecycleConfigCommandInput, UpdateNotebookInstanceLifecycleConfigCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateNotebookInstanceLifecycleConfigCommandInput;
    constructor(input: UpdateNotebookInstanceLifecycleConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNotebookInstanceLifecycleConfigCommandInput, UpdateNotebookInstanceLifecycleConfigCommandOutput>;
    private serialize;
    private deserialize;
}
