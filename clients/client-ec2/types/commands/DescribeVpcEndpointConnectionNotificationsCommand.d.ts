import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcEndpointConnectionNotificationsRequest, DescribeVpcEndpointConnectionNotificationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcEndpointConnectionNotificationsCommandInput = DescribeVpcEndpointConnectionNotificationsRequest;
export declare type DescribeVpcEndpointConnectionNotificationsCommandOutput = DescribeVpcEndpointConnectionNotificationsResult & __MetadataBearer;
export declare class DescribeVpcEndpointConnectionNotificationsCommand extends $Command<DescribeVpcEndpointConnectionNotificationsCommandInput, DescribeVpcEndpointConnectionNotificationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcEndpointConnectionNotificationsCommandInput;
    constructor(input: DescribeVpcEndpointConnectionNotificationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcEndpointConnectionNotificationsCommandInput, DescribeVpcEndpointConnectionNotificationsCommandOutput>;
    private serialize;
    private deserialize;
}
