import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopNotebookInstanceInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopNotebookInstanceCommandInput = StopNotebookInstanceInput;
export declare type StopNotebookInstanceCommandOutput = __MetadataBearer;
export declare class StopNotebookInstanceCommand extends $Command<StopNotebookInstanceCommandInput, StopNotebookInstanceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopNotebookInstanceCommandInput;
    constructor(input: StopNotebookInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopNotebookInstanceCommandInput, StopNotebookInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
