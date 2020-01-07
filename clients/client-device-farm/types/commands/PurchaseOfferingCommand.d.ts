import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { PurchaseOfferingRequest, PurchaseOfferingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PurchaseOfferingCommandInput = PurchaseOfferingRequest;
export declare type PurchaseOfferingCommandOutput = PurchaseOfferingResult & __MetadataBearer;
export declare class PurchaseOfferingCommand extends $Command<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: PurchaseOfferingCommandInput;
    constructor(input: PurchaseOfferingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
