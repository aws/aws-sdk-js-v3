import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { UpdateVirtualInterfaceAttributesRequest, VirtualInterface } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateVirtualInterfaceAttributesCommandInput = UpdateVirtualInterfaceAttributesRequest;
export declare type UpdateVirtualInterfaceAttributesCommandOutput = VirtualInterface & __MetadataBearer;
export declare class UpdateVirtualInterfaceAttributesCommand extends $Command<UpdateVirtualInterfaceAttributesCommandInput, UpdateVirtualInterfaceAttributesCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: UpdateVirtualInterfaceAttributesCommandInput;
    constructor(input: UpdateVirtualInterfaceAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVirtualInterfaceAttributesCommandInput, UpdateVirtualInterfaceAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
