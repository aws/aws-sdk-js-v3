import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayRouteRequest, CreateTransitGatewayRouteResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTransitGatewayRouteCommandInput = CreateTransitGatewayRouteRequest;
export declare type CreateTransitGatewayRouteCommandOutput = CreateTransitGatewayRouteResult & __MetadataBearer;
export declare class CreateTransitGatewayRouteCommand extends $Command<CreateTransitGatewayRouteCommandInput, CreateTransitGatewayRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayRouteCommandInput;
    constructor(input: CreateTransitGatewayRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayRouteCommandInput, CreateTransitGatewayRouteCommandOutput>;
    private serialize;
    private deserialize;
}
