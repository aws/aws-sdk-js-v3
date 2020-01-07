import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListDiscoveredResourcesRequest, ListDiscoveredResourcesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDiscoveredResourcesCommandInput = ListDiscoveredResourcesRequest;
export declare type ListDiscoveredResourcesCommandOutput = ListDiscoveredResourcesResult & __MetadataBearer;
export declare class ListDiscoveredResourcesCommand extends $Command<ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: ListDiscoveredResourcesCommandInput;
    constructor(input: ListDiscoveredResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
