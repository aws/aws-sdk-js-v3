import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { PurchaseReservedInstancesOfferingRequest, PurchaseReservedInstancesOfferingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PurchaseReservedInstancesOfferingCommandInput = PurchaseReservedInstancesOfferingRequest;
export declare type PurchaseReservedInstancesOfferingCommandOutput = PurchaseReservedInstancesOfferingResult & __MetadataBearer;
export declare class PurchaseReservedInstancesOfferingCommand extends $Command<PurchaseReservedInstancesOfferingCommandInput, PurchaseReservedInstancesOfferingCommandOutput, EC2ClientResolvedConfig> {
    readonly input: PurchaseReservedInstancesOfferingCommandInput;
    constructor(input: PurchaseReservedInstancesOfferingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseReservedInstancesOfferingCommandInput, PurchaseReservedInstancesOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
