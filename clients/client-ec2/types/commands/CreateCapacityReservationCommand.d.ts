import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateCapacityReservationRequest, CreateCapacityReservationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCapacityReservationCommandInput = CreateCapacityReservationRequest;
export declare type CreateCapacityReservationCommandOutput = CreateCapacityReservationResult & __MetadataBearer;
export declare class CreateCapacityReservationCommand extends $Command<CreateCapacityReservationCommandInput, CreateCapacityReservationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateCapacityReservationCommandInput;
    constructor(input: CreateCapacityReservationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCapacityReservationCommandInput, CreateCapacityReservationCommandOutput>;
    private serialize;
    private deserialize;
}
