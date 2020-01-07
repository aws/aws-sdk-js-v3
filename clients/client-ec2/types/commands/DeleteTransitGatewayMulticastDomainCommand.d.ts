import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayMulticastDomainRequest, DeleteTransitGatewayMulticastDomainResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTransitGatewayMulticastDomainCommandInput = DeleteTransitGatewayMulticastDomainRequest;
export declare type DeleteTransitGatewayMulticastDomainCommandOutput = DeleteTransitGatewayMulticastDomainResult & __MetadataBearer;
export declare class DeleteTransitGatewayMulticastDomainCommand extends $Command<DeleteTransitGatewayMulticastDomainCommandInput, DeleteTransitGatewayMulticastDomainCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayMulticastDomainCommandInput;
    constructor(input: DeleteTransitGatewayMulticastDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayMulticastDomainCommandInput, DeleteTransitGatewayMulticastDomainCommandOutput>;
    private serialize;
    private deserialize;
}
