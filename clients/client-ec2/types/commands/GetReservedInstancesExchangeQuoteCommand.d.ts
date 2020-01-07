import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetReservedInstancesExchangeQuoteRequest, GetReservedInstancesExchangeQuoteResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetReservedInstancesExchangeQuoteCommandInput = GetReservedInstancesExchangeQuoteRequest;
export declare type GetReservedInstancesExchangeQuoteCommandOutput = GetReservedInstancesExchangeQuoteResult & __MetadataBearer;
export declare class GetReservedInstancesExchangeQuoteCommand extends $Command<GetReservedInstancesExchangeQuoteCommandInput, GetReservedInstancesExchangeQuoteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetReservedInstancesExchangeQuoteCommandInput;
    constructor(input: GetReservedInstancesExchangeQuoteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReservedInstancesExchangeQuoteCommandInput, GetReservedInstancesExchangeQuoteCommandOutput>;
    private serialize;
    private deserialize;
}
