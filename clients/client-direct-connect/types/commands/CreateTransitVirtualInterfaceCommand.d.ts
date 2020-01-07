import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateTransitVirtualInterfaceRequest, CreateTransitVirtualInterfaceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTransitVirtualInterfaceCommandInput = CreateTransitVirtualInterfaceRequest;
export declare type CreateTransitVirtualInterfaceCommandOutput = CreateTransitVirtualInterfaceResult & __MetadataBearer;
export declare class CreateTransitVirtualInterfaceCommand extends $Command<CreateTransitVirtualInterfaceCommandInput, CreateTransitVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: CreateTransitVirtualInterfaceCommandInput;
    constructor(input: CreateTransitVirtualInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitVirtualInterfaceCommandInput, CreateTransitVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
