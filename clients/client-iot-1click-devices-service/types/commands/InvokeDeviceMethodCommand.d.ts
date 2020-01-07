import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { InvokeDeviceMethodRequest, InvokeDeviceMethodResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type InvokeDeviceMethodCommandInput = InvokeDeviceMethodRequest;
export declare type InvokeDeviceMethodCommandOutput = InvokeDeviceMethodResponse & __MetadataBearer;
export declare class InvokeDeviceMethodCommand extends $Command<InvokeDeviceMethodCommandInput, InvokeDeviceMethodCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: InvokeDeviceMethodCommandInput;
    constructor(input: InvokeDeviceMethodCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InvokeDeviceMethodCommandInput, InvokeDeviceMethodCommandOutput>;
    private serialize;
    private deserialize;
}
