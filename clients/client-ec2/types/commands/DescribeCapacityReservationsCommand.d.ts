import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeCapacityReservationsRequest, DescribeCapacityReservationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCapacityReservationsCommandInput = DescribeCapacityReservationsRequest;
export declare type DescribeCapacityReservationsCommandOutput = DescribeCapacityReservationsResult & __MetadataBearer;
export declare class DescribeCapacityReservationsCommand extends $Command<DescribeCapacityReservationsCommandInput, DescribeCapacityReservationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeCapacityReservationsCommandInput;
    constructor(input: DescribeCapacityReservationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCapacityReservationsCommandInput, DescribeCapacityReservationsCommandOutput>;
    private serialize;
    private deserialize;
}
