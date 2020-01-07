import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ConfirmPrivateVirtualInterfaceRequest, ConfirmPrivateVirtualInterfaceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConfirmPrivateVirtualInterfaceCommandInput = ConfirmPrivateVirtualInterfaceRequest;
export declare type ConfirmPrivateVirtualInterfaceCommandOutput = ConfirmPrivateVirtualInterfaceResponse & __MetadataBearer;
export declare class ConfirmPrivateVirtualInterfaceCommand extends $Command<ConfirmPrivateVirtualInterfaceCommandInput, ConfirmPrivateVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: ConfirmPrivateVirtualInterfaceCommandInput;
    constructor(input: ConfirmPrivateVirtualInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmPrivateVirtualInterfaceCommandInput, ConfirmPrivateVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
