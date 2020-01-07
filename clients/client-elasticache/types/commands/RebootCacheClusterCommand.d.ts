import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { RebootCacheClusterMessage, RebootCacheClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RebootCacheClusterCommandInput = RebootCacheClusterMessage;
export declare type RebootCacheClusterCommandOutput = RebootCacheClusterResult & __MetadataBearer;
export declare class RebootCacheClusterCommand extends $Command<RebootCacheClusterCommandInput, RebootCacheClusterCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: RebootCacheClusterCommandInput;
    constructor(input: RebootCacheClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootCacheClusterCommandInput, RebootCacheClusterCommandOutput>;
    private serialize;
    private deserialize;
}
