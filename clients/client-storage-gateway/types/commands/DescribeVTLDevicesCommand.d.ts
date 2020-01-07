import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeVTLDevicesInput, DescribeVTLDevicesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVTLDevicesCommandInput = DescribeVTLDevicesInput;
export declare type DescribeVTLDevicesCommandOutput = DescribeVTLDevicesOutput & __MetadataBearer;
export declare class DescribeVTLDevicesCommand extends $Command<DescribeVTLDevicesCommandInput, DescribeVTLDevicesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeVTLDevicesCommandInput;
    constructor(input: DescribeVTLDevicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVTLDevicesCommandInput, DescribeVTLDevicesCommandOutput>;
    private serialize;
    private deserialize;
}
