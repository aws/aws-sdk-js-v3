import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RejectTransitGatewayVpcAttachmentRequest, RejectTransitGatewayVpcAttachmentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RejectTransitGatewayVpcAttachmentCommandInput = RejectTransitGatewayVpcAttachmentRequest;
export declare type RejectTransitGatewayVpcAttachmentCommandOutput = RejectTransitGatewayVpcAttachmentResult & __MetadataBearer;
export declare class RejectTransitGatewayVpcAttachmentCommand extends $Command<RejectTransitGatewayVpcAttachmentCommandInput, RejectTransitGatewayVpcAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RejectTransitGatewayVpcAttachmentCommandInput;
    constructor(input: RejectTransitGatewayVpcAttachmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectTransitGatewayVpcAttachmentCommandInput, RejectTransitGatewayVpcAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
