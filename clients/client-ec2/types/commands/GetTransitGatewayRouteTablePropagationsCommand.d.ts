import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetTransitGatewayRouteTablePropagationsRequest, GetTransitGatewayRouteTablePropagationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTransitGatewayRouteTablePropagationsCommandInput = GetTransitGatewayRouteTablePropagationsRequest;
export declare type GetTransitGatewayRouteTablePropagationsCommandOutput = GetTransitGatewayRouteTablePropagationsResult & __MetadataBearer;
export declare class GetTransitGatewayRouteTablePropagationsCommand extends $Command<GetTransitGatewayRouteTablePropagationsCommandInput, GetTransitGatewayRouteTablePropagationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetTransitGatewayRouteTablePropagationsCommandInput;
    constructor(input: GetTransitGatewayRouteTablePropagationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTransitGatewayRouteTablePropagationsCommandInput, GetTransitGatewayRouteTablePropagationsCommandOutput>;
    private serialize;
    private deserialize;
}
