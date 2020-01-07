import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { CreatePrivateDnsNamespaceRequest, CreatePrivateDnsNamespaceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePrivateDnsNamespaceCommandInput = CreatePrivateDnsNamespaceRequest;
export declare type CreatePrivateDnsNamespaceCommandOutput = CreatePrivateDnsNamespaceResponse & __MetadataBearer;
export declare class CreatePrivateDnsNamespaceCommand extends $Command<CreatePrivateDnsNamespaceCommandInput, CreatePrivateDnsNamespaceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: CreatePrivateDnsNamespaceCommandInput;
    constructor(input: CreatePrivateDnsNamespaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePrivateDnsNamespaceCommandInput, CreatePrivateDnsNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
