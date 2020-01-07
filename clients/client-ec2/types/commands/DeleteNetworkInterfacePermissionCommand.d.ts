import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkInterfacePermissionRequest, DeleteNetworkInterfacePermissionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNetworkInterfacePermissionCommandInput = DeleteNetworkInterfacePermissionRequest;
export declare type DeleteNetworkInterfacePermissionCommandOutput = DeleteNetworkInterfacePermissionResult & __MetadataBearer;
export declare class DeleteNetworkInterfacePermissionCommand extends $Command<DeleteNetworkInterfacePermissionCommandInput, DeleteNetworkInterfacePermissionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteNetworkInterfacePermissionCommandInput;
    constructor(input: DeleteNetworkInterfacePermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNetworkInterfacePermissionCommandInput, DeleteNetworkInterfacePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
