import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateTransitGatewayMulticastDomainRequest, AssociateTransitGatewayMulticastDomainResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateTransitGatewayMulticastDomainCommandInput = AssociateTransitGatewayMulticastDomainRequest;
export declare type AssociateTransitGatewayMulticastDomainCommandOutput = AssociateTransitGatewayMulticastDomainResult & __MetadataBearer;
export declare class AssociateTransitGatewayMulticastDomainCommand extends $Command<AssociateTransitGatewayMulticastDomainCommandInput, AssociateTransitGatewayMulticastDomainCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateTransitGatewayMulticastDomainCommandInput;
    constructor(input: AssociateTransitGatewayMulticastDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateTransitGatewayMulticastDomainCommandInput, AssociateTransitGatewayMulticastDomainCommandOutput>;
    private serialize;
    private deserialize;
}
