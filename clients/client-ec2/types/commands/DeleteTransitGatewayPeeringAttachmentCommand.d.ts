import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTransitGatewayPeeringAttachmentRequest, DeleteTransitGatewayPeeringAttachmentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTransitGatewayPeeringAttachmentCommandInput = DeleteTransitGatewayPeeringAttachmentRequest;
export declare type DeleteTransitGatewayPeeringAttachmentCommandOutput = DeleteTransitGatewayPeeringAttachmentResult & __MetadataBearer;
export declare class DeleteTransitGatewayPeeringAttachmentCommand extends $Command<DeleteTransitGatewayPeeringAttachmentCommandInput, DeleteTransitGatewayPeeringAttachmentCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTransitGatewayPeeringAttachmentCommandInput;
    constructor(input: DeleteTransitGatewayPeeringAttachmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTransitGatewayPeeringAttachmentCommandInput, DeleteTransitGatewayPeeringAttachmentCommandOutput>;
    private serialize;
    private deserialize;
}
