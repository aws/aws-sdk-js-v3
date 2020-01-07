import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableTransitGatewayRouteTablePropagationRequest, EnableTransitGatewayRouteTablePropagationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableTransitGatewayRouteTablePropagationCommandInput = EnableTransitGatewayRouteTablePropagationRequest;
export declare type EnableTransitGatewayRouteTablePropagationCommandOutput = EnableTransitGatewayRouteTablePropagationResult & __MetadataBearer;
export declare class EnableTransitGatewayRouteTablePropagationCommand extends $Command<EnableTransitGatewayRouteTablePropagationCommandInput, EnableTransitGatewayRouteTablePropagationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableTransitGatewayRouteTablePropagationCommandInput;
    constructor(input: EnableTransitGatewayRouteTablePropagationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableTransitGatewayRouteTablePropagationCommandInput, EnableTransitGatewayRouteTablePropagationCommandOutput>;
    private serialize;
    private deserialize;
}
