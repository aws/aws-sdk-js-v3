import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheSecurityGroupMessage, DescribeCacheSecurityGroupsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCacheSecurityGroupsCommandInput = DescribeCacheSecurityGroupsMessage;
export declare type DescribeCacheSecurityGroupsCommandOutput = CacheSecurityGroupMessage & __MetadataBearer;
export declare class DescribeCacheSecurityGroupsCommand extends $Command<DescribeCacheSecurityGroupsCommandInput, DescribeCacheSecurityGroupsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeCacheSecurityGroupsCommandInput;
    constructor(input: DescribeCacheSecurityGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheSecurityGroupsCommandInput, DescribeCacheSecurityGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
