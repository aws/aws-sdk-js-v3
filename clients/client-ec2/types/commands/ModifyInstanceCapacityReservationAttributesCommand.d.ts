import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceCapacityReservationAttributesRequest, ModifyInstanceCapacityReservationAttributesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyInstanceCapacityReservationAttributesCommandInput = ModifyInstanceCapacityReservationAttributesRequest;
export declare type ModifyInstanceCapacityReservationAttributesCommandOutput = ModifyInstanceCapacityReservationAttributesResult & __MetadataBearer;
export declare class ModifyInstanceCapacityReservationAttributesCommand extends $Command<ModifyInstanceCapacityReservationAttributesCommandInput, ModifyInstanceCapacityReservationAttributesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyInstanceCapacityReservationAttributesCommandInput;
    constructor(input: ModifyInstanceCapacityReservationAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstanceCapacityReservationAttributesCommandInput, ModifyInstanceCapacityReservationAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
