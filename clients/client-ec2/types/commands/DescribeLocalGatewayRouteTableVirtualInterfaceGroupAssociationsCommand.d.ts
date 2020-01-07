import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput = DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest;
export declare type DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput = DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult & __MetadataBearer;
export declare class DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand extends $Command<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput;
    constructor(input: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
