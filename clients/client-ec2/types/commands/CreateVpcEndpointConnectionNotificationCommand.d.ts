import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcEndpointConnectionNotificationRequest, CreateVpcEndpointConnectionNotificationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVpcEndpointConnectionNotificationCommandInput = CreateVpcEndpointConnectionNotificationRequest;
export declare type CreateVpcEndpointConnectionNotificationCommandOutput = CreateVpcEndpointConnectionNotificationResult & __MetadataBearer;
export declare class CreateVpcEndpointConnectionNotificationCommand extends $Command<CreateVpcEndpointConnectionNotificationCommandInput, CreateVpcEndpointConnectionNotificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpcEndpointConnectionNotificationCommandInput;
    constructor(input: CreateVpcEndpointConnectionNotificationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcEndpointConnectionNotificationCommandInput, CreateVpcEndpointConnectionNotificationCommandOutput>;
    private serialize;
    private deserialize;
}
