import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcEndpointConnectionNotificationRequest, ModifyVpcEndpointConnectionNotificationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVpcEndpointConnectionNotificationCommandInput = ModifyVpcEndpointConnectionNotificationRequest;
export declare type ModifyVpcEndpointConnectionNotificationCommandOutput = ModifyVpcEndpointConnectionNotificationResult & __MetadataBearer;
export declare class ModifyVpcEndpointConnectionNotificationCommand extends $Command<ModifyVpcEndpointConnectionNotificationCommandInput, ModifyVpcEndpointConnectionNotificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpcEndpointConnectionNotificationCommandInput;
    constructor(input: ModifyVpcEndpointConnectionNotificationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpcEndpointConnectionNotificationCommandInput, ModifyVpcEndpointConnectionNotificationCommandOutput>;
    private serialize;
    private deserialize;
}
