import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptTransitGatewayVpcAttachmentRequest, AcceptTransitGatewayVpcAttachmentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptTransitGatewayVpcAttachmentCommandInput = AcceptTransitGatewayVpcAttachmentRequest;
export declare type AcceptTransitGatewayVpcAttachmentCommandOutput = AcceptTransitGatewayVpcAttachmentResult & __MetadataBearer;
export declare class AcceptTransitGatewayVpcAttachmentCommand extends $Command<AcceptTransitGatewayVpcAttachmentCommandInput, AcceptTransitGatewayVpcAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AcceptTransitGatewayVpcAttachmentCommandInput;
    constructor(input: AcceptTransitGatewayVpcAttachmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptTransitGatewayVpcAttachmentCommandInput, AcceptTransitGatewayVpcAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
