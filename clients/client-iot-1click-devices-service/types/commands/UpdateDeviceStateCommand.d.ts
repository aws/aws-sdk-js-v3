import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { UpdateDeviceStateRequest, UpdateDeviceStateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDeviceStateCommandInput = UpdateDeviceStateRequest;
export declare type UpdateDeviceStateCommandOutput = UpdateDeviceStateResponse & __MetadataBearer;
export declare class UpdateDeviceStateCommand extends $Command<UpdateDeviceStateCommandInput, UpdateDeviceStateCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: UpdateDeviceStateCommandInput;
    constructor(input: UpdateDeviceStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeviceStateCommandInput, UpdateDeviceStateCommandOutput>;
    private serialize;
    private deserialize;
}
