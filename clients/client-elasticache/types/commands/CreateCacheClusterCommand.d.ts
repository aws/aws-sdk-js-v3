import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateCacheClusterMessage, CreateCacheClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCacheClusterCommandInput = CreateCacheClusterMessage;
export declare type CreateCacheClusterCommandOutput = CreateCacheClusterResult & __MetadataBearer;
export declare class CreateCacheClusterCommand extends $Command<CreateCacheClusterCommandInput, CreateCacheClusterCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CreateCacheClusterCommandInput;
    constructor(input: CreateCacheClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCacheClusterCommandInput, CreateCacheClusterCommandOutput>;
    private serialize;
    private deserialize;
}
