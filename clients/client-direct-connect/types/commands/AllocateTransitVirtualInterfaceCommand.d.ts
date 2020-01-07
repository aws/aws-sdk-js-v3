import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AllocateTransitVirtualInterfaceRequest, AllocateTransitVirtualInterfaceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AllocateTransitVirtualInterfaceCommandInput = AllocateTransitVirtualInterfaceRequest;
export declare type AllocateTransitVirtualInterfaceCommandOutput = AllocateTransitVirtualInterfaceResult & __MetadataBearer;
export declare class AllocateTransitVirtualInterfaceCommand extends $Command<AllocateTransitVirtualInterfaceCommandInput, AllocateTransitVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AllocateTransitVirtualInterfaceCommandInput;
    constructor(input: AllocateTransitVirtualInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocateTransitVirtualInterfaceCommandInput, AllocateTransitVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
