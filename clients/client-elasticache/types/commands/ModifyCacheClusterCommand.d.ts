import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyCacheClusterMessage, ModifyCacheClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyCacheClusterCommandInput = ModifyCacheClusterMessage;
export declare type ModifyCacheClusterCommandOutput = ModifyCacheClusterResult & __MetadataBearer;
export declare class ModifyCacheClusterCommand extends $Command<ModifyCacheClusterCommandInput, ModifyCacheClusterCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyCacheClusterCommandInput;
    constructor(input: ModifyCacheClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyCacheClusterCommandInput, ModifyCacheClusterCommandOutput>;
    private serialize;
    private deserialize;
}
