import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeregisterTransitGatewayMulticastGroupMembersRequest, DeregisterTransitGatewayMulticastGroupMembersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterTransitGatewayMulticastGroupMembersCommandInput = DeregisterTransitGatewayMulticastGroupMembersRequest;
export declare type DeregisterTransitGatewayMulticastGroupMembersCommandOutput = DeregisterTransitGatewayMulticastGroupMembersResult & __MetadataBearer;
export declare class DeregisterTransitGatewayMulticastGroupMembersCommand extends $Command<DeregisterTransitGatewayMulticastGroupMembersCommandInput, DeregisterTransitGatewayMulticastGroupMembersCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeregisterTransitGatewayMulticastGroupMembersCommandInput;
    constructor(input: DeregisterTransitGatewayMulticastGroupMembersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTransitGatewayMulticastGroupMembersCommandInput, DeregisterTransitGatewayMulticastGroupMembersCommandOutput>;
    private serialize;
    private deserialize;
}
