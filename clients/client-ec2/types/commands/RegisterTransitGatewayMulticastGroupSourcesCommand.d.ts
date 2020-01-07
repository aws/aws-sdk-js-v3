import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RegisterTransitGatewayMulticastGroupSourcesRequest, RegisterTransitGatewayMulticastGroupSourcesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterTransitGatewayMulticastGroupSourcesCommandInput = RegisterTransitGatewayMulticastGroupSourcesRequest;
export declare type RegisterTransitGatewayMulticastGroupSourcesCommandOutput = RegisterTransitGatewayMulticastGroupSourcesResult & __MetadataBearer;
export declare class RegisterTransitGatewayMulticastGroupSourcesCommand extends $Command<RegisterTransitGatewayMulticastGroupSourcesCommandInput, RegisterTransitGatewayMulticastGroupSourcesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RegisterTransitGatewayMulticastGroupSourcesCommandInput;
    constructor(input: RegisterTransitGatewayMulticastGroupSourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterTransitGatewayMulticastGroupSourcesCommandInput, RegisterTransitGatewayMulticastGroupSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
