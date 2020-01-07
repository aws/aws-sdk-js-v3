import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcEndpointServicePermissionsRequest, DescribeVpcEndpointServicePermissionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcEndpointServicePermissionsCommandInput = DescribeVpcEndpointServicePermissionsRequest;
export declare type DescribeVpcEndpointServicePermissionsCommandOutput = DescribeVpcEndpointServicePermissionsResult & __MetadataBearer;
export declare class DescribeVpcEndpointServicePermissionsCommand extends $Command<DescribeVpcEndpointServicePermissionsCommandInput, DescribeVpcEndpointServicePermissionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcEndpointServicePermissionsCommandInput;
    constructor(input: DescribeVpcEndpointServicePermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcEndpointServicePermissionsCommandInput, DescribeVpcEndpointServicePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
