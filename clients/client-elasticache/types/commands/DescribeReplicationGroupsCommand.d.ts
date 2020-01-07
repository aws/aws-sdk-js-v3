import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeReplicationGroupsMessage, ReplicationGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReplicationGroupsCommandInput = DescribeReplicationGroupsMessage;
export declare type DescribeReplicationGroupsCommandOutput = ReplicationGroupMessage & __MetadataBearer;
export declare class DescribeReplicationGroupsCommand extends $Command<DescribeReplicationGroupsCommandInput, DescribeReplicationGroupsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeReplicationGroupsCommandInput;
    constructor(input: DescribeReplicationGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationGroupsCommandInput, DescribeReplicationGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
