import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteVirtualInterfaceRequest, DeleteVirtualInterfaceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVirtualInterfaceCommandInput = DeleteVirtualInterfaceRequest;
export declare type DeleteVirtualInterfaceCommandOutput = DeleteVirtualInterfaceResponse & __MetadataBearer;
export declare class DeleteVirtualInterfaceCommand extends $Command<DeleteVirtualInterfaceCommandInput, DeleteVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DeleteVirtualInterfaceCommandInput;
    constructor(input: DeleteVirtualInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVirtualInterfaceCommandInput, DeleteVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
