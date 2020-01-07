import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyReplicationGroupShardConfigurationMessage, ModifyReplicationGroupShardConfigurationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyReplicationGroupShardConfigurationCommandInput = ModifyReplicationGroupShardConfigurationMessage;
export declare type ModifyReplicationGroupShardConfigurationCommandOutput = ModifyReplicationGroupShardConfigurationResult & __MetadataBearer;
export declare class ModifyReplicationGroupShardConfigurationCommand extends $Command<ModifyReplicationGroupShardConfigurationCommandInput, ModifyReplicationGroupShardConfigurationCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyReplicationGroupShardConfigurationCommandInput;
    constructor(input: ModifyReplicationGroupShardConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReplicationGroupShardConfigurationCommandInput, ModifyReplicationGroupShardConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
