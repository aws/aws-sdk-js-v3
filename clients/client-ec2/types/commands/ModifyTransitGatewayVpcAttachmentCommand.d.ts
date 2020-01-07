import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTransitGatewayVpcAttachmentRequest, ModifyTransitGatewayVpcAttachmentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyTransitGatewayVpcAttachmentCommandInput = ModifyTransitGatewayVpcAttachmentRequest;
export declare type ModifyTransitGatewayVpcAttachmentCommandOutput = ModifyTransitGatewayVpcAttachmentResult & __MetadataBearer;
export declare class ModifyTransitGatewayVpcAttachmentCommand extends $Command<ModifyTransitGatewayVpcAttachmentCommandInput, ModifyTransitGatewayVpcAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyTransitGatewayVpcAttachmentCommandInput;
    constructor(input: ModifyTransitGatewayVpcAttachmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyTransitGatewayVpcAttachmentCommandInput, ModifyTransitGatewayVpcAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
