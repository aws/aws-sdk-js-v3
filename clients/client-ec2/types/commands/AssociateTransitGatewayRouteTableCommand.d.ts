import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateTransitGatewayRouteTableRequest, AssociateTransitGatewayRouteTableResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateTransitGatewayRouteTableCommandInput = AssociateTransitGatewayRouteTableRequest;
export declare type AssociateTransitGatewayRouteTableCommandOutput = AssociateTransitGatewayRouteTableResult & __MetadataBearer;
export declare class AssociateTransitGatewayRouteTableCommand extends $Command<AssociateTransitGatewayRouteTableCommandInput, AssociateTransitGatewayRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateTransitGatewayRouteTableCommandInput;
    constructor(input: AssociateTransitGatewayRouteTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateTransitGatewayRouteTableCommandInput, AssociateTransitGatewayRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
