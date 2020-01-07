import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreatePrivateVirtualInterfaceRequest, VirtualInterface } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePrivateVirtualInterfaceCommandInput = CreatePrivateVirtualInterfaceRequest;
export declare type CreatePrivateVirtualInterfaceCommandOutput = VirtualInterface & __MetadataBearer;
export declare class CreatePrivateVirtualInterfaceCommand extends $Command<CreatePrivateVirtualInterfaceCommandInput, CreatePrivateVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreatePrivateVirtualInterfaceCommandInput;
    constructor(input: CreatePrivateVirtualInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePrivateVirtualInterfaceCommandInput, CreatePrivateVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
