import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayMulticastDomainRequest, CreateTransitGatewayMulticastDomainResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTransitGatewayMulticastDomainCommandInput = CreateTransitGatewayMulticastDomainRequest;
export declare type CreateTransitGatewayMulticastDomainCommandOutput = CreateTransitGatewayMulticastDomainResult & __MetadataBearer;
export declare class CreateTransitGatewayMulticastDomainCommand extends $Command<CreateTransitGatewayMulticastDomainCommandInput, CreateTransitGatewayMulticastDomainCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayMulticastDomainCommandInput;
    constructor(input: CreateTransitGatewayMulticastDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayMulticastDomainCommandInput, CreateTransitGatewayMulticastDomainCommandOutput>;
    private serialize;
    private deserialize;
}
