import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateEndpointInput, CreateEndpointOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEndpointCommandInput = CreateEndpointInput;
export declare type CreateEndpointCommandOutput = CreateEndpointOutput & __MetadataBearer;
export declare class CreateEndpointCommand extends $Command<CreateEndpointCommandInput, CreateEndpointCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateEndpointCommandInput;
    constructor(input: CreateEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEndpointCommandInput, CreateEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
