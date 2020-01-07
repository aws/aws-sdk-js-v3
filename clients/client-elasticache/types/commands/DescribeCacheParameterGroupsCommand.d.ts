import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheParameterGroupsMessage, DescribeCacheParameterGroupsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCacheParameterGroupsCommandInput = DescribeCacheParameterGroupsMessage;
export declare type DescribeCacheParameterGroupsCommandOutput = CacheParameterGroupsMessage & __MetadataBearer;
export declare class DescribeCacheParameterGroupsCommand extends $Command<DescribeCacheParameterGroupsCommandInput, DescribeCacheParameterGroupsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeCacheParameterGroupsCommandInput;
    constructor(input: DescribeCacheParameterGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheParameterGroupsCommandInput, DescribeCacheParameterGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
