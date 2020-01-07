import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeReservedCacheNodesOfferingsMessage, ReservedCacheNodesOfferingMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReservedCacheNodesOfferingsCommandInput = DescribeReservedCacheNodesOfferingsMessage;
export declare type DescribeReservedCacheNodesOfferingsCommandOutput = ReservedCacheNodesOfferingMessage & __MetadataBearer;
export declare class DescribeReservedCacheNodesOfferingsCommand extends $Command<DescribeReservedCacheNodesOfferingsCommandInput, DescribeReservedCacheNodesOfferingsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeReservedCacheNodesOfferingsCommandInput;
    constructor(input: DescribeReservedCacheNodesOfferingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedCacheNodesOfferingsCommandInput, DescribeReservedCacheNodesOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
