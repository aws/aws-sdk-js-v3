import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { ListAggregateDiscoveredResourcesRequest, ListAggregateDiscoveredResourcesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAggregateDiscoveredResourcesCommandInput = ListAggregateDiscoveredResourcesRequest;
export declare type ListAggregateDiscoveredResourcesCommandOutput = ListAggregateDiscoveredResourcesResponse & __MetadataBearer;
export declare class ListAggregateDiscoveredResourcesCommand extends $Command<ListAggregateDiscoveredResourcesCommandInput, ListAggregateDiscoveredResourcesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: ListAggregateDiscoveredResourcesCommandInput;
    constructor(input: ListAggregateDiscoveredResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAggregateDiscoveredResourcesCommandInput, ListAggregateDiscoveredResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
