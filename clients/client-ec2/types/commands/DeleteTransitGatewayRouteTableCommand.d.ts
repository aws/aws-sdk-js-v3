import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayRouteTableRequest, DeleteTransitGatewayRouteTableResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTransitGatewayRouteTableCommandInput = DeleteTransitGatewayRouteTableRequest;
export declare type DeleteTransitGatewayRouteTableCommandOutput = DeleteTransitGatewayRouteTableResult & __MetadataBearer;
export declare class DeleteTransitGatewayRouteTableCommand extends $Command<DeleteTransitGatewayRouteTableCommandInput, DeleteTransitGatewayRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayRouteTableCommandInput;
    constructor(input: DeleteTransitGatewayRouteTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayRouteTableCommandInput, DeleteTransitGatewayRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
