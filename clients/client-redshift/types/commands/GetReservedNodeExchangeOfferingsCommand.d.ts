import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { GetReservedNodeExchangeOfferingsInputMessage, GetReservedNodeExchangeOfferingsOutputMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetReservedNodeExchangeOfferingsCommandInput = GetReservedNodeExchangeOfferingsInputMessage;
export declare type GetReservedNodeExchangeOfferingsCommandOutput = GetReservedNodeExchangeOfferingsOutputMessage & __MetadataBearer;
export declare class GetReservedNodeExchangeOfferingsCommand extends $Command<GetReservedNodeExchangeOfferingsCommandInput, GetReservedNodeExchangeOfferingsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: GetReservedNodeExchangeOfferingsCommandInput;
    constructor(input: GetReservedNodeExchangeOfferingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReservedNodeExchangeOfferingsCommandInput, GetReservedNodeExchangeOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
