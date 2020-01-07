import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayVpcAttachmentRequest, DeleteTransitGatewayVpcAttachmentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTransitGatewayVpcAttachmentCommandInput = DeleteTransitGatewayVpcAttachmentRequest;
export declare type DeleteTransitGatewayVpcAttachmentCommandOutput = DeleteTransitGatewayVpcAttachmentResult & __MetadataBearer;
export declare class DeleteTransitGatewayVpcAttachmentCommand extends $Command<DeleteTransitGatewayVpcAttachmentCommandInput, DeleteTransitGatewayVpcAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayVpcAttachmentCommandInput;
    constructor(input: DeleteTransitGatewayVpcAttachmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayVpcAttachmentCommandInput, DeleteTransitGatewayVpcAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
