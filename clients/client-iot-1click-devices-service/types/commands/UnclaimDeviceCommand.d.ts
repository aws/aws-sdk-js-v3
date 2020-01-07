import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { UnclaimDeviceRequest, UnclaimDeviceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnclaimDeviceCommandInput = UnclaimDeviceRequest;
export declare type UnclaimDeviceCommandOutput = UnclaimDeviceResponse & __MetadataBearer;
export declare class UnclaimDeviceCommand extends $Command<UnclaimDeviceCommandInput, UnclaimDeviceCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: UnclaimDeviceCommandInput;
    constructor(input: UnclaimDeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnclaimDeviceCommandInput, UnclaimDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
