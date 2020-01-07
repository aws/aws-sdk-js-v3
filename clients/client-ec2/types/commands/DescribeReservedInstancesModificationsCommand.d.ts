import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeReservedInstancesModificationsRequest, DescribeReservedInstancesModificationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReservedInstancesModificationsCommandInput = DescribeReservedInstancesModificationsRequest;
export declare type DescribeReservedInstancesModificationsCommandOutput = DescribeReservedInstancesModificationsResult & __MetadataBearer;
export declare class DescribeReservedInstancesModificationsCommand extends $Command<DescribeReservedInstancesModificationsCommandInput, DescribeReservedInstancesModificationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeReservedInstancesModificationsCommandInput;
    constructor(input: DescribeReservedInstancesModificationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedInstancesModificationsCommandInput, DescribeReservedInstancesModificationsCommandOutput>;
    private serialize;
    private deserialize;
}
