import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableTransitGatewayRouteTablePropagationRequest, DisableTransitGatewayRouteTablePropagationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableTransitGatewayRouteTablePropagationCommandInput = DisableTransitGatewayRouteTablePropagationRequest;
export declare type DisableTransitGatewayRouteTablePropagationCommandOutput = DisableTransitGatewayRouteTablePropagationResult & __MetadataBearer;
export declare class DisableTransitGatewayRouteTablePropagationCommand extends $Command<DisableTransitGatewayRouteTablePropagationCommandInput, DisableTransitGatewayRouteTablePropagationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisableTransitGatewayRouteTablePropagationCommandInput;
    constructor(input: DisableTransitGatewayRouteTablePropagationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableTransitGatewayRouteTablePropagationCommandInput, DisableTransitGatewayRouteTablePropagationCommandOutput>;
    private serialize;
    private deserialize;
}
