import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { AssociateVirtualInterfaceRequest, VirtualInterface } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateVirtualInterfaceCommandInput = AssociateVirtualInterfaceRequest;
export declare type AssociateVirtualInterfaceCommandOutput = VirtualInterface & __MetadataBearer;
export declare class AssociateVirtualInterfaceCommand extends $Command<AssociateVirtualInterfaceCommandInput, AssociateVirtualInterfaceCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: AssociateVirtualInterfaceCommandInput;
    constructor(input: AssociateVirtualInterfaceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateVirtualInterfaceCommandInput, AssociateVirtualInterfaceCommandOutput>;
    private serialize;
    private deserialize;
}
