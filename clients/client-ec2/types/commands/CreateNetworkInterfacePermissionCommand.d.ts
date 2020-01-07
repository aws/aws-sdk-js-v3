import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkInterfacePermissionRequest, CreateNetworkInterfacePermissionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateNetworkInterfacePermissionCommandInput = CreateNetworkInterfacePermissionRequest;
export declare type CreateNetworkInterfacePermissionCommandOutput = CreateNetworkInterfacePermissionResult & __MetadataBearer;
export declare class CreateNetworkInterfacePermissionCommand extends $Command<CreateNetworkInterfacePermissionCommandInput, CreateNetworkInterfacePermissionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateNetworkInterfacePermissionCommandInput;
    constructor(input: CreateNetworkInterfacePermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNetworkInterfacePermissionCommandInput, CreateNetworkInterfacePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
