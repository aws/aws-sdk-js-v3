import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetDevicePoolRequest, GetDevicePoolResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDevicePoolCommandInput = GetDevicePoolRequest;
export declare type GetDevicePoolCommandOutput = GetDevicePoolResult & __MetadataBearer;
export declare class GetDevicePoolCommand extends $Command<GetDevicePoolCommandInput, GetDevicePoolCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetDevicePoolCommandInput;
    constructor(input: GetDevicePoolCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDevicePoolCommandInput, GetDevicePoolCommandOutput>;
    private serialize;
    private deserialize;
}
