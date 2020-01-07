import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcEndpointServiceConfigurationsRequest, DescribeVpcEndpointServiceConfigurationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcEndpointServiceConfigurationsCommandInput = DescribeVpcEndpointServiceConfigurationsRequest;
export declare type DescribeVpcEndpointServiceConfigurationsCommandOutput = DescribeVpcEndpointServiceConfigurationsResult & __MetadataBearer;
export declare class DescribeVpcEndpointServiceConfigurationsCommand extends $Command<DescribeVpcEndpointServiceConfigurationsCommandInput, DescribeVpcEndpointServiceConfigurationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcEndpointServiceConfigurationsCommandInput;
    constructor(input: DescribeVpcEndpointServiceConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcEndpointServiceConfigurationsCommandInput, DescribeVpcEndpointServiceConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
