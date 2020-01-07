import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyReplicationGroupMessage, ModifyReplicationGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyReplicationGroupCommandInput = ModifyReplicationGroupMessage;
export declare type ModifyReplicationGroupCommandOutput = ModifyReplicationGroupResult & __MetadataBearer;
export declare class ModifyReplicationGroupCommand extends $Command<ModifyReplicationGroupCommandInput, ModifyReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyReplicationGroupCommandInput;
    constructor(input: ModifyReplicationGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReplicationGroupCommandInput, ModifyReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
