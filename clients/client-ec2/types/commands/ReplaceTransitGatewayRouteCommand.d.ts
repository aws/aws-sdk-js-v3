import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceTransitGatewayRouteRequest, ReplaceTransitGatewayRouteResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReplaceTransitGatewayRouteCommandInput = ReplaceTransitGatewayRouteRequest;
export declare type ReplaceTransitGatewayRouteCommandOutput = ReplaceTransitGatewayRouteResult & __MetadataBearer;
export declare class ReplaceTransitGatewayRouteCommand extends $Command<ReplaceTransitGatewayRouteCommandInput, ReplaceTransitGatewayRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReplaceTransitGatewayRouteCommandInput;
    constructor(input: ReplaceTransitGatewayRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplaceTransitGatewayRouteCommandInput, ReplaceTransitGatewayRouteCommandOutput>;
    private serialize;
    private deserialize;
}
