import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheEngineVersionMessage, DescribeCacheEngineVersionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCacheEngineVersionsCommandInput = DescribeCacheEngineVersionsMessage;
export declare type DescribeCacheEngineVersionsCommandOutput = CacheEngineVersionMessage & __MetadataBearer;
export declare class DescribeCacheEngineVersionsCommand extends $Command<DescribeCacheEngineVersionsCommandInput, DescribeCacheEngineVersionsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeCacheEngineVersionsCommandInput;
    constructor(input: DescribeCacheEngineVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheEngineVersionsCommandInput, DescribeCacheEngineVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
