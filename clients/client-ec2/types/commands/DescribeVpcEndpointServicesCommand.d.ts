import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcEndpointServicesRequest, DescribeVpcEndpointServicesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcEndpointServicesCommandInput = DescribeVpcEndpointServicesRequest;
export declare type DescribeVpcEndpointServicesCommandOutput = DescribeVpcEndpointServicesResult & __MetadataBearer;
export declare class DescribeVpcEndpointServicesCommand extends $Command<DescribeVpcEndpointServicesCommandInput, DescribeVpcEndpointServicesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcEndpointServicesCommandInput;
    constructor(input: DescribeVpcEndpointServicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcEndpointServicesCommandInput, DescribeVpcEndpointServicesCommandOutput>;
    private serialize;
    private deserialize;
}
