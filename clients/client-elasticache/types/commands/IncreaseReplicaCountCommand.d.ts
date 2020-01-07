import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { IncreaseReplicaCountMessage, IncreaseReplicaCountResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type IncreaseReplicaCountCommandInput = IncreaseReplicaCountMessage;
export declare type IncreaseReplicaCountCommandOutput = IncreaseReplicaCountResult & __MetadataBearer;
export declare class IncreaseReplicaCountCommand extends $Command<IncreaseReplicaCountCommandInput, IncreaseReplicaCountCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: IncreaseReplicaCountCommandInput;
    constructor(input: IncreaseReplicaCountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IncreaseReplicaCountCommandInput, IncreaseReplicaCountCommandOutput>;
    private serialize;
    private deserialize;
}
