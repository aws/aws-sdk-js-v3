import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateNotebookInstanceInput, UpdateNotebookInstanceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateNotebookInstanceCommandInput = UpdateNotebookInstanceInput;
export declare type UpdateNotebookInstanceCommandOutput = UpdateNotebookInstanceOutput & __MetadataBearer;
export declare class UpdateNotebookInstanceCommand extends $Command<UpdateNotebookInstanceCommandInput, UpdateNotebookInstanceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateNotebookInstanceCommandInput;
    constructor(input: UpdateNotebookInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNotebookInstanceCommandInput, UpdateNotebookInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
