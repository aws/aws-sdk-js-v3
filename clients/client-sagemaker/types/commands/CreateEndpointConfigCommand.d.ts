import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateEndpointConfigInput, CreateEndpointConfigOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEndpointConfigCommandInput = CreateEndpointConfigInput;
export declare type CreateEndpointConfigCommandOutput = CreateEndpointConfigOutput & __MetadataBearer;
export declare class CreateEndpointConfigCommand extends $Command<CreateEndpointConfigCommandInput, CreateEndpointConfigCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateEndpointConfigCommandInput;
    constructor(input: CreateEndpointConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEndpointConfigCommandInput, CreateEndpointConfigCommandOutput>;
    private serialize;
    private deserialize;
}
