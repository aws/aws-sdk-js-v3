import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetHostReservationPurchasePreviewRequest, GetHostReservationPurchasePreviewResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetHostReservationPurchasePreviewCommandInput = GetHostReservationPurchasePreviewRequest;
export declare type GetHostReservationPurchasePreviewCommandOutput = GetHostReservationPurchasePreviewResult & __MetadataBearer;
export declare class GetHostReservationPurchasePreviewCommand extends $Command<GetHostReservationPurchasePreviewCommandInput, GetHostReservationPurchasePreviewCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetHostReservationPurchasePreviewCommandInput;
    constructor(input: GetHostReservationPurchasePreviewCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHostReservationPurchasePreviewCommandInput, GetHostReservationPurchasePreviewCommandOutput>;
    private serialize;
    private deserialize;
}
