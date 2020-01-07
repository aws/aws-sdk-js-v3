import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeVirtualInterfacesRequest, VirtualInterfaces } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVirtualInterfacesCommandInput = DescribeVirtualInterfacesRequest;
export declare type DescribeVirtualInterfacesCommandOutput = VirtualInterfaces & __MetadataBearer;
export declare class DescribeVirtualInterfacesCommand extends $Command<DescribeVirtualInterfacesCommandInput, DescribeVirtualInterfacesCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeVirtualInterfacesCommandInput;
    constructor(input: DescribeVirtualInterfacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVirtualInterfacesCommandInput, DescribeVirtualInterfacesCommandOutput>;
    private serialize;
    private deserialize;
}
