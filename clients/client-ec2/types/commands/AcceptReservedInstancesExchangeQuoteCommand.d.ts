import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptReservedInstancesExchangeQuoteRequest, AcceptReservedInstancesExchangeQuoteResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptReservedInstancesExchangeQuoteCommandInput = AcceptReservedInstancesExchangeQuoteRequest;
export declare type AcceptReservedInstancesExchangeQuoteCommandOutput = AcceptReservedInstancesExchangeQuoteResult & __MetadataBearer;
export declare class AcceptReservedInstancesExchangeQuoteCommand extends $Command<AcceptReservedInstancesExchangeQuoteCommandInput, AcceptReservedInstancesExchangeQuoteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AcceptReservedInstancesExchangeQuoteCommandInput;
    constructor(input: AcceptReservedInstancesExchangeQuoteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptReservedInstancesExchangeQuoteCommandInput, AcceptReservedInstancesExchangeQuoteCommandOutput>;
    private serialize;
    private deserialize;
}
