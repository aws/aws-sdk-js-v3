import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreatePublicVirtualInterfaceRequest, VirtualInterface } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePublicVirtualInterfaceCommandInput = CreatePublicVirtualInterfaceRequest;
export declare type CreatePublicVirtualInterfaceCommandOutput = VirtualInterface & __MetadataBearer;
export declare class CreatePublicVirtualInterfaceCommand extends $Command<CreatePublicVirtualInterfaceCommandInput, CreatePublicVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreatePublicVirtualInterfaceCommandInput;
    constructor(input: CreatePublicVirtualInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePublicVirtualInterfaceCommandInput, CreatePublicVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
