import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateTransitGatewayRouteTableRequest, DisassociateTransitGatewayRouteTableResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateTransitGatewayRouteTableCommandInput = DisassociateTransitGatewayRouteTableRequest;
export declare type DisassociateTransitGatewayRouteTableCommandOutput = DisassociateTransitGatewayRouteTableResult & __MetadataBearer;
export declare class DisassociateTransitGatewayRouteTableCommand extends $Command<DisassociateTransitGatewayRouteTableCommandInput, DisassociateTransitGatewayRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateTransitGatewayRouteTableCommandInput;
    constructor(input: DisassociateTransitGatewayRouteTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTransitGatewayRouteTableCommandInput, DisassociateTransitGatewayRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
