import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateReplicationGroupMessage, CreateReplicationGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateReplicationGroupCommandInput = CreateReplicationGroupMessage;
export declare type CreateReplicationGroupCommandOutput = CreateReplicationGroupResult & __MetadataBearer;
export declare class CreateReplicationGroupCommand extends $Command<CreateReplicationGroupCommandInput, CreateReplicationGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CreateReplicationGroupCommandInput;
    constructor(input: CreateReplicationGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReplicationGroupCommandInput, CreateReplicationGroupCommandOutput>;
    private serialize;
    private deserialize;
}
