import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeCustomerGatewaysRequest, DescribeCustomerGatewaysResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCustomerGatewaysCommandInput = DescribeCustomerGatewaysRequest;
export declare type DescribeCustomerGatewaysCommandOutput = DescribeCustomerGatewaysResult & __MetadataBearer;
export declare class DescribeCustomerGatewaysCommand extends $Command<DescribeCustomerGatewaysCommandInput, DescribeCustomerGatewaysCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeCustomerGatewaysCommandInput;
    constructor(input: DescribeCustomerGatewaysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCustomerGatewaysCommandInput, DescribeCustomerGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
