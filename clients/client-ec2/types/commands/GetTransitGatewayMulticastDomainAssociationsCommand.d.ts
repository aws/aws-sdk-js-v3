import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetTransitGatewayMulticastDomainAssociationsRequest, GetTransitGatewayMulticastDomainAssociationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTransitGatewayMulticastDomainAssociationsCommandInput = GetTransitGatewayMulticastDomainAssociationsRequest;
export declare type GetTransitGatewayMulticastDomainAssociationsCommandOutput = GetTransitGatewayMulticastDomainAssociationsResult & __MetadataBearer;
export declare class GetTransitGatewayMulticastDomainAssociationsCommand extends $Command<GetTransitGatewayMulticastDomainAssociationsCommandInput, GetTransitGatewayMulticastDomainAssociationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetTransitGatewayMulticastDomainAssociationsCommandInput;
    constructor(input: GetTransitGatewayMulticastDomainAssociationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTransitGatewayMulticastDomainAssociationsCommandInput, GetTransitGatewayMulticastDomainAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
