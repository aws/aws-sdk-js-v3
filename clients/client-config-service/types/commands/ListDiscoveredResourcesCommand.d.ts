import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { ListDiscoveredResourcesRequest, ListDiscoveredResourcesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDiscoveredResourcesCommandInput = ListDiscoveredResourcesRequest;
export declare type ListDiscoveredResourcesCommandOutput = ListDiscoveredResourcesResponse & __MetadataBearer;
export declare class ListDiscoveredResourcesCommand extends $Command<ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: ListDiscoveredResourcesCommandInput;
    constructor(input: ListDiscoveredResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
