import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteNotebookInstanceInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNotebookInstanceCommandInput = DeleteNotebookInstanceInput;
export declare type DeleteNotebookInstanceCommandOutput = __MetadataBearer;
export declare class DeleteNotebookInstanceCommand extends $Command<DeleteNotebookInstanceCommandInput, DeleteNotebookInstanceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteNotebookInstanceCommandInput;
    constructor(input: DeleteNotebookInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNotebookInstanceCommandInput, DeleteNotebookInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
