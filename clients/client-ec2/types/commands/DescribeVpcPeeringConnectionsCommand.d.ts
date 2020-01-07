import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcPeeringConnectionsRequest, DescribeVpcPeeringConnectionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcPeeringConnectionsCommandInput = DescribeVpcPeeringConnectionsRequest;
export declare type DescribeVpcPeeringConnectionsCommandOutput = DescribeVpcPeeringConnectionsResult & __MetadataBearer;
export declare class DescribeVpcPeeringConnectionsCommand extends $Command<DescribeVpcPeeringConnectionsCommandInput, DescribeVpcPeeringConnectionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcPeeringConnectionsCommandInput;
    constructor(input: DescribeVpcPeeringConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcPeeringConnectionsCommandInput, DescribeVpcPeeringConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
