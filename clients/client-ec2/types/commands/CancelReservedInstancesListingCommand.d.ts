import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelReservedInstancesListingRequest, CancelReservedInstancesListingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelReservedInstancesListingCommandInput = CancelReservedInstancesListingRequest;
export declare type CancelReservedInstancesListingCommandOutput = CancelReservedInstancesListingResult & __MetadataBearer;
export declare class CancelReservedInstancesListingCommand extends $Command<CancelReservedInstancesListingCommandInput, CancelReservedInstancesListingCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelReservedInstancesListingCommandInput;
    constructor(input: CancelReservedInstancesListingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelReservedInstancesListingCommandInput, CancelReservedInstancesListingCommandOutput>;
    private serialize;
    private deserialize;
}
