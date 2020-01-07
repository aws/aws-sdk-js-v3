import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeEgressOnlyInternetGatewaysRequest, DescribeEgressOnlyInternetGatewaysResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEgressOnlyInternetGatewaysCommandInput = DescribeEgressOnlyInternetGatewaysRequest;
export declare type DescribeEgressOnlyInternetGatewaysCommandOutput = DescribeEgressOnlyInternetGatewaysResult & __MetadataBearer;
export declare class DescribeEgressOnlyInternetGatewaysCommand extends $Command<DescribeEgressOnlyInternetGatewaysCommandInput, DescribeEgressOnlyInternetGatewaysCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeEgressOnlyInternetGatewaysCommandInput;
    constructor(input: DescribeEgressOnlyInternetGatewaysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEgressOnlyInternetGatewaysCommandInput, DescribeEgressOnlyInternetGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
