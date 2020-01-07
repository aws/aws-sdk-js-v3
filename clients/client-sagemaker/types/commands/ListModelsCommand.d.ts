import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListModelsInput, ListModelsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListModelsCommandInput = ListModelsInput;
export declare type ListModelsCommandOutput = ListModelsOutput & __MetadataBearer;
export declare class ListModelsCommand extends $Command<ListModelsCommandInput, ListModelsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListModelsCommandInput;
    constructor(input: ListModelsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListModelsCommandInput, ListModelsCommandOutput>;
    private serialize;
    private deserialize;
}
