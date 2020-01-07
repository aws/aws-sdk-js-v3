import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewayMulticastDomainsRequest, DescribeTransitGatewayMulticastDomainsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTransitGatewayMulticastDomainsCommandInput = DescribeTransitGatewayMulticastDomainsRequest;
export declare type DescribeTransitGatewayMulticastDomainsCommandOutput = DescribeTransitGatewayMulticastDomainsResult & __MetadataBearer;
export declare class DescribeTransitGatewayMulticastDomainsCommand extends $Command<DescribeTransitGatewayMulticastDomainsCommandInput, DescribeTransitGatewayMulticastDomainsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTransitGatewayMulticastDomainsCommandInput;
    constructor(input: DescribeTransitGatewayMulticastDomainsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTransitGatewayMulticastDomainsCommandInput, DescribeTransitGatewayMulticastDomainsCommandOutput>;
    private serialize;
    private deserialize;
}
