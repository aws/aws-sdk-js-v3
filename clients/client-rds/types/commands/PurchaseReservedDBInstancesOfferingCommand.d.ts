import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { PurchaseReservedDBInstancesOfferingMessage, PurchaseReservedDBInstancesOfferingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PurchaseReservedDBInstancesOfferingCommandInput = PurchaseReservedDBInstancesOfferingMessage;
export declare type PurchaseReservedDBInstancesOfferingCommandOutput = PurchaseReservedDBInstancesOfferingResult & __MetadataBearer;
export declare class PurchaseReservedDBInstancesOfferingCommand extends $Command<PurchaseReservedDBInstancesOfferingCommandInput, PurchaseReservedDBInstancesOfferingCommandOutput, RDSClientResolvedConfig> {
    readonly input: PurchaseReservedDBInstancesOfferingCommandInput;
    constructor(input: PurchaseReservedDBInstancesOfferingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseReservedDBInstancesOfferingCommandInput, PurchaseReservedDBInstancesOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
