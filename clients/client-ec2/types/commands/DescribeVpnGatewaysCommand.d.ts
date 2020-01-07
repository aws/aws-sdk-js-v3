import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpnGatewaysRequest, DescribeVpnGatewaysResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpnGatewaysCommandInput = DescribeVpnGatewaysRequest;
export declare type DescribeVpnGatewaysCommandOutput = DescribeVpnGatewaysResult & __MetadataBearer;
export declare class DescribeVpnGatewaysCommand extends $Command<DescribeVpnGatewaysCommandInput, DescribeVpnGatewaysCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpnGatewaysCommandInput;
    constructor(input: DescribeVpnGatewaysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpnGatewaysCommandInput, DescribeVpnGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
