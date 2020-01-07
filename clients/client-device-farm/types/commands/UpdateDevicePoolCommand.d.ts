import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateDevicePoolRequest, UpdateDevicePoolResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDevicePoolCommandInput = UpdateDevicePoolRequest;
export declare type UpdateDevicePoolCommandOutput = UpdateDevicePoolResult & __MetadataBearer;
export declare class UpdateDevicePoolCommand extends $Command<UpdateDevicePoolCommandInput, UpdateDevicePoolCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateDevicePoolCommandInput;
    constructor(input: UpdateDevicePoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDevicePoolCommandInput, UpdateDevicePoolCommandOutput>;
    private serialize;
    private deserialize;
}
