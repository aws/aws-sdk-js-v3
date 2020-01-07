import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { DeleteNamespaceRequest, DeleteNamespaceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNamespaceCommandInput = DeleteNamespaceRequest;
export declare type DeleteNamespaceCommandOutput = DeleteNamespaceResponse & __MetadataBearer;
export declare class DeleteNamespaceCommand extends $Command<DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: DeleteNamespaceCommandInput;
    constructor(input: DeleteNamespaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
