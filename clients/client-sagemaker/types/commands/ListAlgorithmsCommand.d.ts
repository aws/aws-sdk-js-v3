import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListAlgorithmsInput, ListAlgorithmsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAlgorithmsCommandInput = ListAlgorithmsInput;
export declare type ListAlgorithmsCommandOutput = ListAlgorithmsOutput & __MetadataBearer;
export declare class ListAlgorithmsCommand extends $Command<ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListAlgorithmsCommandInput;
    constructor(input: ListAlgorithmsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput>;
    private serialize;
    private deserialize;
}
