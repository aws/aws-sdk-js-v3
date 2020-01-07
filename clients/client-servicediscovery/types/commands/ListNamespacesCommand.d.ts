import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { ListNamespacesRequest, ListNamespacesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListNamespacesCommandInput = ListNamespacesRequest;
export declare type ListNamespacesCommandOutput = ListNamespacesResponse & __MetadataBearer;
export declare class ListNamespacesCommand extends $Command<ListNamespacesCommandInput, ListNamespacesCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: ListNamespacesCommandInput;
    constructor(input: ListNamespacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNamespacesCommandInput, ListNamespacesCommandOutput>;
    private serialize;
    private deserialize;
}
