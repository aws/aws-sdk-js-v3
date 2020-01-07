import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeReservedInstancesRequest, DescribeReservedInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReservedInstancesCommandInput = DescribeReservedInstancesRequest;
export declare type DescribeReservedInstancesCommandOutput = DescribeReservedInstancesResult & __MetadataBearer;
export declare class DescribeReservedInstancesCommand extends $Command<DescribeReservedInstancesCommandInput, DescribeReservedInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeReservedInstancesCommandInput;
    constructor(input: DescribeReservedInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedInstancesCommandInput, DescribeReservedInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
