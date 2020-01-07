import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { PurchaseReservedCacheNodesOfferingMessage, PurchaseReservedCacheNodesOfferingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PurchaseReservedCacheNodesOfferingCommandInput = PurchaseReservedCacheNodesOfferingMessage;
export declare type PurchaseReservedCacheNodesOfferingCommandOutput = PurchaseReservedCacheNodesOfferingResult & __MetadataBearer;
export declare class PurchaseReservedCacheNodesOfferingCommand extends $Command<PurchaseReservedCacheNodesOfferingCommandInput, PurchaseReservedCacheNodesOfferingCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: PurchaseReservedCacheNodesOfferingCommandInput;
    constructor(input: PurchaseReservedCacheNodesOfferingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseReservedCacheNodesOfferingCommandInput, PurchaseReservedCacheNodesOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
