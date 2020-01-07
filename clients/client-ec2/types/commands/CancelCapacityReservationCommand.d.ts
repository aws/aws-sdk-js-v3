import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelCapacityReservationRequest, CancelCapacityReservationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelCapacityReservationCommandInput = CancelCapacityReservationRequest;
export declare type CancelCapacityReservationCommandOutput = CancelCapacityReservationResult & __MetadataBearer;
export declare class CancelCapacityReservationCommand extends $Command<CancelCapacityReservationCommandInput, CancelCapacityReservationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelCapacityReservationCommandInput;
    constructor(input: CancelCapacityReservationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelCapacityReservationCommandInput, CancelCapacityReservationCommandOutput>;
    private serialize;
    private deserialize;
}
