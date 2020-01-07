import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptTransitGatewayPeeringAttachmentRequest, AcceptTransitGatewayPeeringAttachmentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptTransitGatewayPeeringAttachmentCommandInput = AcceptTransitGatewayPeeringAttachmentRequest;
export declare type AcceptTransitGatewayPeeringAttachmentCommandOutput = AcceptTransitGatewayPeeringAttachmentResult & __MetadataBearer;
export declare class AcceptTransitGatewayPeeringAttachmentCommand extends $Command<AcceptTransitGatewayPeeringAttachmentCommandInput, AcceptTransitGatewayPeeringAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AcceptTransitGatewayPeeringAttachmentCommandInput;
    constructor(input: AcceptTransitGatewayPeeringAttachmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptTransitGatewayPeeringAttachmentCommandInput, AcceptTransitGatewayPeeringAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
