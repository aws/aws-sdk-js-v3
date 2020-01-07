import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheParameterGroupDetails, DescribeCacheParametersMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCacheParametersCommandInput = DescribeCacheParametersMessage;
export declare type DescribeCacheParametersCommandOutput = CacheParameterGroupDetails & __MetadataBearer;
export declare class DescribeCacheParametersCommand extends $Command<DescribeCacheParametersCommandInput, DescribeCacheParametersCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeCacheParametersCommandInput;
    constructor(input: DescribeCacheParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheParametersCommandInput, DescribeCacheParametersCommandOutput>;
    private serialize;
    private deserialize;
}
