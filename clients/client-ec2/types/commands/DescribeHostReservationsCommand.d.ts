import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeHostReservationsRequest, DescribeHostReservationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHostReservationsCommandInput = DescribeHostReservationsRequest;
export declare type DescribeHostReservationsCommandOutput = DescribeHostReservationsResult & __MetadataBearer;
export declare class DescribeHostReservationsCommand extends $Command<DescribeHostReservationsCommandInput, DescribeHostReservationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeHostReservationsCommandInput;
    constructor(input: DescribeHostReservationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHostReservationsCommandInput, DescribeHostReservationsCommandOutput>;
    private serialize;
    private deserialize;
}
