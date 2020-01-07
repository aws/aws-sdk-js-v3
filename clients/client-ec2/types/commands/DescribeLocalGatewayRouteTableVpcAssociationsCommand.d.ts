import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLocalGatewayRouteTableVpcAssociationsRequest, DescribeLocalGatewayRouteTableVpcAssociationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLocalGatewayRouteTableVpcAssociationsCommandInput = DescribeLocalGatewayRouteTableVpcAssociationsRequest;
export declare type DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput = DescribeLocalGatewayRouteTableVpcAssociationsResult & __MetadataBearer;
export declare class DescribeLocalGatewayRouteTableVpcAssociationsCommand extends $Command<DescribeLocalGatewayRouteTableVpcAssociationsCommandInput, DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput;
    constructor(input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocalGatewayRouteTableVpcAssociationsCommandInput, DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
