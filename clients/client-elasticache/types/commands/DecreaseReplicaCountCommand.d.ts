import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DecreaseReplicaCountMessage, DecreaseReplicaCountResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DecreaseReplicaCountCommandInput = DecreaseReplicaCountMessage;
export declare type DecreaseReplicaCountCommandOutput = DecreaseReplicaCountResult & __MetadataBearer;
export declare class DecreaseReplicaCountCommand extends $Command<DecreaseReplicaCountCommandInput, DecreaseReplicaCountCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DecreaseReplicaCountCommandInput;
    constructor(input: DecreaseReplicaCountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DecreaseReplicaCountCommandInput, DecreaseReplicaCountCommandOutput>;
    private serialize;
    private deserialize;
}
