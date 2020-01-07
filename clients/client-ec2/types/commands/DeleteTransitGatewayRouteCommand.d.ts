import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayRouteRequest, DeleteTransitGatewayRouteResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTransitGatewayRouteCommandInput = DeleteTransitGatewayRouteRequest;
export declare type DeleteTransitGatewayRouteCommandOutput = DeleteTransitGatewayRouteResult & __MetadataBearer;
export declare class DeleteTransitGatewayRouteCommand extends $Command<DeleteTransitGatewayRouteCommandInput, DeleteTransitGatewayRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayRouteCommandInput;
    constructor(input: DeleteTransitGatewayRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayRouteCommandInput, DeleteTransitGatewayRouteCommandOutput>;
    private serialize;
    private deserialize;
}
