import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeTransitGatewayRouteTablesRequest, DescribeTransitGatewayRouteTablesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTransitGatewayRouteTablesCommandInput = DescribeTransitGatewayRouteTablesRequest;
export declare type DescribeTransitGatewayRouteTablesCommandOutput = DescribeTransitGatewayRouteTablesResult & __MetadataBearer;
export declare class DescribeTransitGatewayRouteTablesCommand extends $Command<DescribeTransitGatewayRouteTablesCommandInput, DescribeTransitGatewayRouteTablesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeTransitGatewayRouteTablesCommandInput;
    constructor(input: DescribeTransitGatewayRouteTablesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTransitGatewayRouteTablesCommandInput, DescribeTransitGatewayRouteTablesCommandOutput>;
    private serialize;
    private deserialize;
}
