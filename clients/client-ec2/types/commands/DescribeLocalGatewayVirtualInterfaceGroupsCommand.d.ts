import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLocalGatewayVirtualInterfaceGroupsRequest, DescribeLocalGatewayVirtualInterfaceGroupsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLocalGatewayVirtualInterfaceGroupsCommandInput = DescribeLocalGatewayVirtualInterfaceGroupsRequest;
export declare type DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput = DescribeLocalGatewayVirtualInterfaceGroupsResult & __MetadataBearer;
export declare class DescribeLocalGatewayVirtualInterfaceGroupsCommand extends $Command<DescribeLocalGatewayVirtualInterfaceGroupsCommandInput, DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput;
    constructor(input: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocalGatewayVirtualInterfaceGroupsCommandInput, DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
