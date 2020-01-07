import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNatGatewaysRequest, DescribeNatGatewaysResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNatGatewaysCommandInput = DescribeNatGatewaysRequest;
export declare type DescribeNatGatewaysCommandOutput = DescribeNatGatewaysResult & __MetadataBearer;
export declare class DescribeNatGatewaysCommand extends $Command<DescribeNatGatewaysCommandInput, DescribeNatGatewaysCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeNatGatewaysCommandInput;
    constructor(input: DescribeNatGatewaysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNatGatewaysCommandInput, DescribeNatGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
