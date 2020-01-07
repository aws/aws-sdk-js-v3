import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeReservedInstancesListingsRequest, DescribeReservedInstancesListingsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReservedInstancesListingsCommandInput = DescribeReservedInstancesListingsRequest;
export declare type DescribeReservedInstancesListingsCommandOutput = DescribeReservedInstancesListingsResult & __MetadataBearer;
export declare class DescribeReservedInstancesListingsCommand extends $Command<DescribeReservedInstancesListingsCommandInput, DescribeReservedInstancesListingsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeReservedInstancesListingsCommandInput;
    constructor(input: DescribeReservedInstancesListingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedInstancesListingsCommandInput, DescribeReservedInstancesListingsCommandOutput>;
    private serialize;
    private deserialize;
}
