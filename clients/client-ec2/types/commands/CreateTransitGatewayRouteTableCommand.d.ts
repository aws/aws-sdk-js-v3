import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayRouteTableRequest, CreateTransitGatewayRouteTableResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTransitGatewayRouteTableCommandInput = CreateTransitGatewayRouteTableRequest;
export declare type CreateTransitGatewayRouteTableCommandOutput = CreateTransitGatewayRouteTableResult & __MetadataBearer;
export declare class CreateTransitGatewayRouteTableCommand extends $Command<CreateTransitGatewayRouteTableCommandInput, CreateTransitGatewayRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayRouteTableCommandInput;
    constructor(input: CreateTransitGatewayRouteTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayRouteTableCommandInput, CreateTransitGatewayRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
