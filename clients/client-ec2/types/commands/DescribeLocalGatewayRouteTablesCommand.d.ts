import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLocalGatewayRouteTablesRequest, DescribeLocalGatewayRouteTablesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLocalGatewayRouteTablesCommandInput = DescribeLocalGatewayRouteTablesRequest;
export declare type DescribeLocalGatewayRouteTablesCommandOutput = DescribeLocalGatewayRouteTablesResult & __MetadataBearer;
export declare class DescribeLocalGatewayRouteTablesCommand extends $Command<DescribeLocalGatewayRouteTablesCommandInput, DescribeLocalGatewayRouteTablesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLocalGatewayRouteTablesCommandInput;
    constructor(input: DescribeLocalGatewayRouteTablesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocalGatewayRouteTablesCommandInput, DescribeLocalGatewayRouteTablesCommandOutput>;
    private serialize;
    private deserialize;
}
