import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { ConfirmTransitVirtualInterfaceRequest, ConfirmTransitVirtualInterfaceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConfirmTransitVirtualInterfaceCommandInput = ConfirmTransitVirtualInterfaceRequest;
export declare type ConfirmTransitVirtualInterfaceCommandOutput = ConfirmTransitVirtualInterfaceResponse & __MetadataBearer;
export declare class ConfirmTransitVirtualInterfaceCommand extends $Command<ConfirmTransitVirtualInterfaceCommandInput, ConfirmTransitVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: ConfirmTransitVirtualInterfaceCommandInput;
    constructor(input: ConfirmTransitVirtualInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmTransitVirtualInterfaceCommandInput, ConfirmTransitVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
