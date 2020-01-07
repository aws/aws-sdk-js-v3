import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { GetNamespaceRequest, GetNamespaceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetNamespaceCommandInput = GetNamespaceRequest;
export declare type GetNamespaceCommandOutput = GetNamespaceResponse & __MetadataBearer;
export declare class GetNamespaceCommand extends $Command<GetNamespaceCommandInput, GetNamespaceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: GetNamespaceCommandInput;
    constructor(input: GetNamespaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNamespaceCommandInput, GetNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
