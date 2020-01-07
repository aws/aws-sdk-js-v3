import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { PurchaseHostReservationRequest, PurchaseHostReservationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PurchaseHostReservationCommandInput = PurchaseHostReservationRequest;
export declare type PurchaseHostReservationCommandOutput = PurchaseHostReservationResult & __MetadataBearer;
export declare class PurchaseHostReservationCommand extends $Command<PurchaseHostReservationCommandInput, PurchaseHostReservationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: PurchaseHostReservationCommandInput;
    constructor(input: PurchaseHostReservationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseHostReservationCommandInput, PurchaseHostReservationCommandOutput>;
    private serialize;
    private deserialize;
}
