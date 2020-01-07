import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteCacheClusterMessage, DeleteCacheClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCacheClusterCommandInput = DeleteCacheClusterMessage;
export declare type DeleteCacheClusterCommandOutput = DeleteCacheClusterResult & __MetadataBearer;
export declare class DeleteCacheClusterCommand extends $Command<DeleteCacheClusterCommandInput, DeleteCacheClusterCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteCacheClusterCommandInput;
    constructor(input: DeleteCacheClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCacheClusterCommandInput, DeleteCacheClusterCommandOutput>;
    private serialize;
    private deserialize;
}
