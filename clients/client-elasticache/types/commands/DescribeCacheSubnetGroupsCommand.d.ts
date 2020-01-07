import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheSubnetGroupMessage, DescribeCacheSubnetGroupsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCacheSubnetGroupsCommandInput = DescribeCacheSubnetGroupsMessage;
export declare type DescribeCacheSubnetGroupsCommandOutput = CacheSubnetGroupMessage & __MetadataBearer;
export declare class DescribeCacheSubnetGroupsCommand extends $Command<DescribeCacheSubnetGroupsCommandInput, DescribeCacheSubnetGroupsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeCacheSubnetGroupsCommandInput;
    constructor(input: DescribeCacheSubnetGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheSubnetGroupsCommandInput, DescribeCacheSubnetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
