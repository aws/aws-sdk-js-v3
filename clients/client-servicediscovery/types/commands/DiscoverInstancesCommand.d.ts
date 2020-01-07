import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { DiscoverInstancesRequest, DiscoverInstancesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DiscoverInstancesCommandInput = DiscoverInstancesRequest;
export declare type DiscoverInstancesCommandOutput = DiscoverInstancesResponse & __MetadataBearer;
export declare class DiscoverInstancesCommand extends $Command<DiscoverInstancesCommandInput, DiscoverInstancesCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: DiscoverInstancesCommandInput;
    constructor(input: DiscoverInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DiscoverInstancesCommandInput, DiscoverInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
