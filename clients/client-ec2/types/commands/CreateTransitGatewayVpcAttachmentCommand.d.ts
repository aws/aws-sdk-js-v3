import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayVpcAttachmentRequest, CreateTransitGatewayVpcAttachmentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTransitGatewayVpcAttachmentCommandInput = CreateTransitGatewayVpcAttachmentRequest;
export declare type CreateTransitGatewayVpcAttachmentCommandOutput = CreateTransitGatewayVpcAttachmentResult & __MetadataBearer;
export declare class CreateTransitGatewayVpcAttachmentCommand extends $Command<CreateTransitGatewayVpcAttachmentCommandInput, CreateTransitGatewayVpcAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayVpcAttachmentCommandInput;
    constructor(input: CreateTransitGatewayVpcAttachmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayVpcAttachmentCommandInput, CreateTransitGatewayVpcAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
