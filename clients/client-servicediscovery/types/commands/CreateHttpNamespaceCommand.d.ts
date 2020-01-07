import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { CreateHttpNamespaceRequest, CreateHttpNamespaceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHttpNamespaceCommandInput = CreateHttpNamespaceRequest;
export declare type CreateHttpNamespaceCommandOutput = CreateHttpNamespaceResponse & __MetadataBearer;
export declare class CreateHttpNamespaceCommand extends $Command<CreateHttpNamespaceCommandInput, CreateHttpNamespaceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: CreateHttpNamespaceCommandInput;
    constructor(input: CreateHttpNamespaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHttpNamespaceCommandInput, CreateHttpNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
