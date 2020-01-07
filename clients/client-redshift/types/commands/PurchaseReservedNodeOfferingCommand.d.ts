import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { PurchaseReservedNodeOfferingMessage, PurchaseReservedNodeOfferingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PurchaseReservedNodeOfferingCommandInput = PurchaseReservedNodeOfferingMessage;
export declare type PurchaseReservedNodeOfferingCommandOutput = PurchaseReservedNodeOfferingResult & __MetadataBearer;
export declare class PurchaseReservedNodeOfferingCommand extends $Command<PurchaseReservedNodeOfferingCommandInput, PurchaseReservedNodeOfferingCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: PurchaseReservedNodeOfferingCommandInput;
    constructor(input: PurchaseReservedNodeOfferingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseReservedNodeOfferingCommandInput, PurchaseReservedNodeOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
