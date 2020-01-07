import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RejectTransitGatewayPeeringAttachmentRequest, RejectTransitGatewayPeeringAttachmentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RejectTransitGatewayPeeringAttachmentCommandInput = RejectTransitGatewayPeeringAttachmentRequest;
export declare type RejectTransitGatewayPeeringAttachmentCommandOutput = RejectTransitGatewayPeeringAttachmentResult & __MetadataBearer;
export declare class RejectTransitGatewayPeeringAttachmentCommand extends $Command<RejectTransitGatewayPeeringAttachmentCommandInput, RejectTransitGatewayPeeringAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RejectTransitGatewayPeeringAttachmentCommandInput;
    constructor(input: RejectTransitGatewayPeeringAttachmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectTransitGatewayPeeringAttachmentCommandInput, RejectTransitGatewayPeeringAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
