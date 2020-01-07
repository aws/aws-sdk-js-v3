import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeReservedCacheNodesMessage, ReservedCacheNodeMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReservedCacheNodesCommandInput = DescribeReservedCacheNodesMessage;
export declare type DescribeReservedCacheNodesCommandOutput = ReservedCacheNodeMessage & __MetadataBearer;
export declare class DescribeReservedCacheNodesCommand extends $Command<DescribeReservedCacheNodesCommandInput, DescribeReservedCacheNodesCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeReservedCacheNodesCommandInput;
    constructor(input: DescribeReservedCacheNodesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedCacheNodesCommandInput, DescribeReservedCacheNodesCommandOutput>;
    private serialize;
    private deserialize;
}
