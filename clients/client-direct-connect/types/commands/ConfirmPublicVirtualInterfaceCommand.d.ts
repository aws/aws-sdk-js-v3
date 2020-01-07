import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ConfirmPublicVirtualInterfaceRequest, ConfirmPublicVirtualInterfaceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConfirmPublicVirtualInterfaceCommandInput = ConfirmPublicVirtualInterfaceRequest;
export declare type ConfirmPublicVirtualInterfaceCommandOutput = ConfirmPublicVirtualInterfaceResponse & __MetadataBearer;
export declare class ConfirmPublicVirtualInterfaceCommand extends $Command<ConfirmPublicVirtualInterfaceCommandInput, ConfirmPublicVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: ConfirmPublicVirtualInterfaceCommandInput;
    constructor(input: ConfirmPublicVirtualInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmPublicVirtualInterfaceCommandInput, ConfirmPublicVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
