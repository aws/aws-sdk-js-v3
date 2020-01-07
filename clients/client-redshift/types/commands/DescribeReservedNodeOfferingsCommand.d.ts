import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeReservedNodeOfferingsMessage, ReservedNodeOfferingsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReservedNodeOfferingsCommandInput = DescribeReservedNodeOfferingsMessage;
export declare type DescribeReservedNodeOfferingsCommandOutput = ReservedNodeOfferingsMessage & __MetadataBearer;
export declare class DescribeReservedNodeOfferingsCommand extends $Command<DescribeReservedNodeOfferingsCommandInput, DescribeReservedNodeOfferingsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeReservedNodeOfferingsCommandInput;
    constructor(input: DescribeReservedNodeOfferingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedNodeOfferingsCommandInput, DescribeReservedNodeOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
