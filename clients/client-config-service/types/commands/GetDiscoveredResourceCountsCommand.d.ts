import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetDiscoveredResourceCountsRequest, GetDiscoveredResourceCountsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDiscoveredResourceCountsCommandInput = GetDiscoveredResourceCountsRequest;
export declare type GetDiscoveredResourceCountsCommandOutput = GetDiscoveredResourceCountsResponse & __MetadataBearer;
export declare class GetDiscoveredResourceCountsCommand extends $Command<GetDiscoveredResourceCountsCommandInput, GetDiscoveredResourceCountsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetDiscoveredResourceCountsCommandInput;
    constructor(input: GetDiscoveredResourceCountsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDiscoveredResourceCountsCommandInput, GetDiscoveredResourceCountsCommandOutput>;
    private serialize;
    private deserialize;
}
