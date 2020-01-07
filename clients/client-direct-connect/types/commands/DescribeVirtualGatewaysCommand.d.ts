import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { VirtualGateways } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVirtualGatewaysCommandInput = {};
export declare type DescribeVirtualGatewaysCommandOutput = VirtualGateways & __MetadataBearer;
export declare class DescribeVirtualGatewaysCommand extends $Command<DescribeVirtualGatewaysCommandInput, DescribeVirtualGatewaysCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeVirtualGatewaysCommandInput;
    constructor(input: DescribeVirtualGatewaysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVirtualGatewaysCommandInput, DescribeVirtualGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
