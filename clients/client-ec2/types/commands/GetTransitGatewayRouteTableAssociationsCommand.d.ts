import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetTransitGatewayRouteTableAssociationsRequest, GetTransitGatewayRouteTableAssociationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTransitGatewayRouteTableAssociationsCommandInput = GetTransitGatewayRouteTableAssociationsRequest;
export declare type GetTransitGatewayRouteTableAssociationsCommandOutput = GetTransitGatewayRouteTableAssociationsResult & __MetadataBearer;
export declare class GetTransitGatewayRouteTableAssociationsCommand extends $Command<GetTransitGatewayRouteTableAssociationsCommandInput, GetTransitGatewayRouteTableAssociationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetTransitGatewayRouteTableAssociationsCommandInput;
    constructor(input: GetTransitGatewayRouteTableAssociationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTransitGatewayRouteTableAssociationsCommandInput, GetTransitGatewayRouteTableAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
