import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocatePublicVirtualInterfaceRequest, VirtualInterface } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AllocatePublicVirtualInterfaceCommandInput = AllocatePublicVirtualInterfaceRequest;
export declare type AllocatePublicVirtualInterfaceCommandOutput = VirtualInterface & __MetadataBearer;
export declare class AllocatePublicVirtualInterfaceCommand extends $Command<AllocatePublicVirtualInterfaceCommandInput, AllocatePublicVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AllocatePublicVirtualInterfaceCommandInput;
    constructor(input: AllocatePublicVirtualInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocatePublicVirtualInterfaceCommandInput, AllocatePublicVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
