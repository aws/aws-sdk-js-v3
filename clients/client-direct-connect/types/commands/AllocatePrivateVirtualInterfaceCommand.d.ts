import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocatePrivateVirtualInterfaceRequest, VirtualInterface } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AllocatePrivateVirtualInterfaceCommandInput = AllocatePrivateVirtualInterfaceRequest;
export declare type AllocatePrivateVirtualInterfaceCommandOutput = VirtualInterface & __MetadataBearer;
export declare class AllocatePrivateVirtualInterfaceCommand extends $Command<AllocatePrivateVirtualInterfaceCommandInput, AllocatePrivateVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AllocatePrivateVirtualInterfaceCommandInput;
    constructor(input: AllocatePrivateVirtualInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocatePrivateVirtualInterfaceCommandInput, AllocatePrivateVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
