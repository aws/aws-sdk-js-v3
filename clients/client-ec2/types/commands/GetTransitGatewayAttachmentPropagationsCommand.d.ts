import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetTransitGatewayAttachmentPropagationsRequest, GetTransitGatewayAttachmentPropagationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTransitGatewayAttachmentPropagationsCommandInput = GetTransitGatewayAttachmentPropagationsRequest;
export declare type GetTransitGatewayAttachmentPropagationsCommandOutput = GetTransitGatewayAttachmentPropagationsResult & __MetadataBearer;
export declare class GetTransitGatewayAttachmentPropagationsCommand extends $Command<GetTransitGatewayAttachmentPropagationsCommandInput, GetTransitGatewayAttachmentPropagationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetTransitGatewayAttachmentPropagationsCommandInput;
    constructor(input: GetTransitGatewayAttachmentPropagationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTransitGatewayAttachmentPropagationsCommandInput, GetTransitGatewayAttachmentPropagationsCommandOutput>;
    private serialize;
    private deserialize;
}
