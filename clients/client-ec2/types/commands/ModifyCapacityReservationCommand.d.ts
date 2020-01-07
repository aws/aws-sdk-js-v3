import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyCapacityReservationRequest, ModifyCapacityReservationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyCapacityReservationCommandInput = ModifyCapacityReservationRequest;
export declare type ModifyCapacityReservationCommandOutput = ModifyCapacityReservationResult & __MetadataBearer;
export declare class ModifyCapacityReservationCommand extends $Command<ModifyCapacityReservationCommandInput, ModifyCapacityReservationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyCapacityReservationCommandInput;
    constructor(input: ModifyCapacityReservationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyCapacityReservationCommandInput, ModifyCapacityReservationCommandOutput>;
    private serialize;
    private deserialize;
}
