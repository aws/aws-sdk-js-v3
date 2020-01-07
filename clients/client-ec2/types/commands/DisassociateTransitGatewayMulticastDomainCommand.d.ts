import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateTransitGatewayMulticastDomainRequest, DisassociateTransitGatewayMulticastDomainResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateTransitGatewayMulticastDomainCommandInput = DisassociateTransitGatewayMulticastDomainRequest;
export declare type DisassociateTransitGatewayMulticastDomainCommandOutput = DisassociateTransitGatewayMulticastDomainResult & __MetadataBearer;
export declare class DisassociateTransitGatewayMulticastDomainCommand extends $Command<DisassociateTransitGatewayMulticastDomainCommandInput, DisassociateTransitGatewayMulticastDomainCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateTransitGatewayMulticastDomainCommandInput;
    constructor(input: DisassociateTransitGatewayMulticastDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTransitGatewayMulticastDomainCommandInput, DisassociateTransitGatewayMulticastDomainCommandOutput>;
    private serialize;
    private deserialize;
}
