import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcEndpointConnectionsRequest, DescribeVpcEndpointConnectionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcEndpointConnectionsCommandInput = DescribeVpcEndpointConnectionsRequest;
export declare type DescribeVpcEndpointConnectionsCommandOutput = DescribeVpcEndpointConnectionsResult & __MetadataBearer;
export declare class DescribeVpcEndpointConnectionsCommand extends $Command<DescribeVpcEndpointConnectionsCommandInput, DescribeVpcEndpointConnectionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcEndpointConnectionsCommandInput;
    constructor(input: DescribeVpcEndpointConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcEndpointConnectionsCommandInput, DescribeVpcEndpointConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
