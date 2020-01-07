import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { DescribeDeviceRequest, DescribeDeviceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDeviceCommandInput = DescribeDeviceRequest;
export declare type DescribeDeviceCommandOutput = DescribeDeviceResponse & __MetadataBearer;
export declare class DescribeDeviceCommand extends $Command<DescribeDeviceCommandInput, DescribeDeviceCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: DescribeDeviceCommandInput;
    constructor(input: DescribeDeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDeviceCommandInput, DescribeDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
