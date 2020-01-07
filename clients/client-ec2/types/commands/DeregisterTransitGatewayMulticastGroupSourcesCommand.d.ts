import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeregisterTransitGatewayMulticastGroupSourcesRequest, DeregisterTransitGatewayMulticastGroupSourcesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterTransitGatewayMulticastGroupSourcesCommandInput = DeregisterTransitGatewayMulticastGroupSourcesRequest;
export declare type DeregisterTransitGatewayMulticastGroupSourcesCommandOutput = DeregisterTransitGatewayMulticastGroupSourcesResult & __MetadataBearer;
export declare class DeregisterTransitGatewayMulticastGroupSourcesCommand extends $Command<DeregisterTransitGatewayMulticastGroupSourcesCommandInput, DeregisterTransitGatewayMulticastGroupSourcesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeregisterTransitGatewayMulticastGroupSourcesCommandInput;
    constructor(input: DeregisterTransitGatewayMulticastGroupSourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTransitGatewayMulticastGroupSourcesCommandInput, DeregisterTransitGatewayMulticastGroupSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
