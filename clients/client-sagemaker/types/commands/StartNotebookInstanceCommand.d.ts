import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StartNotebookInstanceInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartNotebookInstanceCommandInput = StartNotebookInstanceInput;
export declare type StartNotebookInstanceCommandOutput = __MetadataBearer;
export declare class StartNotebookInstanceCommand extends $Command<StartNotebookInstanceCommandInput, StartNotebookInstanceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StartNotebookInstanceCommandInput;
    constructor(input: StartNotebookInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartNotebookInstanceCommandInput, StartNotebookInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
