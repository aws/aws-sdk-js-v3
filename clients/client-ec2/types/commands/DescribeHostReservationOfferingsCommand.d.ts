import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeHostReservationOfferingsRequest, DescribeHostReservationOfferingsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHostReservationOfferingsCommandInput = DescribeHostReservationOfferingsRequest;
export declare type DescribeHostReservationOfferingsCommandOutput = DescribeHostReservationOfferingsResult & __MetadataBearer;
export declare class DescribeHostReservationOfferingsCommand extends $Command<DescribeHostReservationOfferingsCommandInput, DescribeHostReservationOfferingsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeHostReservationOfferingsCommandInput;
    constructor(input: DescribeHostReservationOfferingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHostReservationOfferingsCommandInput, DescribeHostReservationOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
