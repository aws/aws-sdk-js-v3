import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetCapacityReservationUsageRequest, GetCapacityReservationUsageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCapacityReservationUsageCommandInput = GetCapacityReservationUsageRequest;
export declare type GetCapacityReservationUsageCommandOutput = GetCapacityReservationUsageResult & __MetadataBearer;
export declare class GetCapacityReservationUsageCommand extends $Command<GetCapacityReservationUsageCommandInput, GetCapacityReservationUsageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetCapacityReservationUsageCommandInput;
    constructor(input: GetCapacityReservationUsageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCapacityReservationUsageCommandInput, GetCapacityReservationUsageCommandOutput>;
    private serialize;
    private deserialize;
}
