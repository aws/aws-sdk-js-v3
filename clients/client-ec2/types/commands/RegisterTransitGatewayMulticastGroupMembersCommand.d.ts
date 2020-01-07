import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RegisterTransitGatewayMulticastGroupMembersRequest, RegisterTransitGatewayMulticastGroupMembersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterTransitGatewayMulticastGroupMembersCommandInput = RegisterTransitGatewayMulticastGroupMembersRequest;
export declare type RegisterTransitGatewayMulticastGroupMembersCommandOutput = RegisterTransitGatewayMulticastGroupMembersResult & __MetadataBearer;
export declare class RegisterTransitGatewayMulticastGroupMembersCommand extends $Command<RegisterTransitGatewayMulticastGroupMembersCommandInput, RegisterTransitGatewayMulticastGroupMembersCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RegisterTransitGatewayMulticastGroupMembersCommandInput;
    constructor(input: RegisterTransitGatewayMulticastGroupMembersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterTransitGatewayMulticastGroupMembersCommandInput, RegisterTransitGatewayMulticastGroupMembersCommandOutput>;
    private serialize;
    private deserialize;
}
