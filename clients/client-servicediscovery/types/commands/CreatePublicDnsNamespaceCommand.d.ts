import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { CreatePublicDnsNamespaceRequest, CreatePublicDnsNamespaceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePublicDnsNamespaceCommandInput = CreatePublicDnsNamespaceRequest;
export declare type CreatePublicDnsNamespaceCommandOutput = CreatePublicDnsNamespaceResponse & __MetadataBearer;
export declare class CreatePublicDnsNamespaceCommand extends $Command<CreatePublicDnsNamespaceCommandInput, CreatePublicDnsNamespaceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: CreatePublicDnsNamespaceCommandInput;
    constructor(input: CreatePublicDnsNamespaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePublicDnsNamespaceCommandInput, CreatePublicDnsNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
