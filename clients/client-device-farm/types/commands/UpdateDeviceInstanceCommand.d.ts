import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateDeviceInstanceRequest, UpdateDeviceInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDeviceInstanceCommandInput = UpdateDeviceInstanceRequest;
export declare type UpdateDeviceInstanceCommandOutput = UpdateDeviceInstanceResult & __MetadataBearer;
export declare class UpdateDeviceInstanceCommand extends $Command<UpdateDeviceInstanceCommandInput, UpdateDeviceInstanceCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateDeviceInstanceCommandInput;
    constructor(input: UpdateDeviceInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeviceInstanceCommandInput, UpdateDeviceInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
