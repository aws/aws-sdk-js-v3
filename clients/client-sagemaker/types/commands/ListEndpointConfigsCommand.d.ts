import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListEndpointConfigsInput, ListEndpointConfigsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEndpointConfigsCommandInput = ListEndpointConfigsInput;
export declare type ListEndpointConfigsCommandOutput = ListEndpointConfigsOutput & __MetadataBearer;
export declare class ListEndpointConfigsCommand extends $Command<ListEndpointConfigsCommandInput, ListEndpointConfigsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListEndpointConfigsCommandInput;
    constructor(input: ListEndpointConfigsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEndpointConfigsCommandInput, ListEndpointConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
