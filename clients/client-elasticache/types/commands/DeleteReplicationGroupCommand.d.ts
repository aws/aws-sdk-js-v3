import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteReplicationGroupMessage, DeleteReplicationGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReplicationGroupCommandInput = DeleteReplicationGroupMessage;
export declare type DeleteReplicationGroupCommandOutput = DeleteReplicationGroupResult & __MetadataBearer;
export declare class DeleteReplicationGroupCommand extends $Command<DeleteReplicationGroupCommandInput, DeleteReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteReplicationGroupCommandInput;
    constructor(input: DeleteReplicationGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReplicationGroupCommandInput, DeleteReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
