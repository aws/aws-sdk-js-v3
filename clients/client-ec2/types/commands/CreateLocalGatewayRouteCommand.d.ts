import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateLocalGatewayRouteRequest, CreateLocalGatewayRouteResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLocalGatewayRouteCommandInput = CreateLocalGatewayRouteRequest;
export declare type CreateLocalGatewayRouteCommandOutput = CreateLocalGatewayRouteResult & __MetadataBearer;
export declare class CreateLocalGatewayRouteCommand extends $Command<CreateLocalGatewayRouteCommandInput, CreateLocalGatewayRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateLocalGatewayRouteCommandInput;
    constructor(input: CreateLocalGatewayRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocalGatewayRouteCommandInput, CreateLocalGatewayRouteCommandOutput>;
    private serialize;
    private deserialize;
}
