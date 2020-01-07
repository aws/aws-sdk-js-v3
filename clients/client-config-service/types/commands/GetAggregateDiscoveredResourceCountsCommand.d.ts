import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetAggregateDiscoveredResourceCountsRequest, GetAggregateDiscoveredResourceCountsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAggregateDiscoveredResourceCountsCommandInput = GetAggregateDiscoveredResourceCountsRequest;
export declare type GetAggregateDiscoveredResourceCountsCommandOutput = GetAggregateDiscoveredResourceCountsResponse & __MetadataBearer;
export declare class GetAggregateDiscoveredResourceCountsCommand extends $Command<GetAggregateDiscoveredResourceCountsCommandInput, GetAggregateDiscoveredResourceCountsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetAggregateDiscoveredResourceCountsCommandInput;
    constructor(input: GetAggregateDiscoveredResourceCountsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAggregateDiscoveredResourceCountsCommandInput, GetAggregateDiscoveredResourceCountsCommandOutput>;
    private serialize;
    private deserialize;
}
