import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteLocalGatewayRouteRequest, DeleteLocalGatewayRouteResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLocalGatewayRouteCommandInput = DeleteLocalGatewayRouteRequest;
export declare type DeleteLocalGatewayRouteCommandOutput = DeleteLocalGatewayRouteResult & __MetadataBearer;
export declare class DeleteLocalGatewayRouteCommand extends $Command<DeleteLocalGatewayRouteCommandInput, DeleteLocalGatewayRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteLocalGatewayRouteCommandInput;
    constructor(input: DeleteLocalGatewayRouteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLocalGatewayRouteCommandInput, DeleteLocalGatewayRouteCommandOutput>;
    private serialize;
    private deserialize;
}
