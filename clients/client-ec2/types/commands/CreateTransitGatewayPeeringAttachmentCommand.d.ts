import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayPeeringAttachmentRequest, CreateTransitGatewayPeeringAttachmentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTransitGatewayPeeringAttachmentCommandInput = CreateTransitGatewayPeeringAttachmentRequest;
export declare type CreateTransitGatewayPeeringAttachmentCommandOutput = CreateTransitGatewayPeeringAttachmentResult & __MetadataBearer;
export declare class CreateTransitGatewayPeeringAttachmentCommand extends $Command<CreateTransitGatewayPeeringAttachmentCommandInput, CreateTransitGatewayPeeringAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayPeeringAttachmentCommandInput;
    constructor(input: CreateTransitGatewayPeeringAttachmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayPeeringAttachmentCommandInput, CreateTransitGatewayPeeringAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
