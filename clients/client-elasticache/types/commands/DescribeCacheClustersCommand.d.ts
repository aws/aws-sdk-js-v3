import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheClusterMessage, DescribeCacheClustersMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCacheClustersCommandInput = DescribeCacheClustersMessage;
export declare type DescribeCacheClustersCommandOutput = CacheClusterMessage & __MetadataBearer;
export declare class DescribeCacheClustersCommand extends $Command<DescribeCacheClustersCommandInput, DescribeCacheClustersCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeCacheClustersCommandInput;
    constructor(input: DescribeCacheClustersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheClustersCommandInput, DescribeCacheClustersCommandOutput>;
    private serialize;
    private deserialize;
}
