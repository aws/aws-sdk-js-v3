import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetDevicePoolCompatibilityRequest, GetDevicePoolCompatibilityResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDevicePoolCompatibilityCommandInput = GetDevicePoolCompatibilityRequest;
export declare type GetDevicePoolCompatibilityCommandOutput = GetDevicePoolCompatibilityResult & __MetadataBearer;
export declare class GetDevicePoolCompatibilityCommand extends $Command<GetDevicePoolCompatibilityCommandInput, GetDevicePoolCompatibilityCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetDevicePoolCompatibilityCommandInput;
    constructor(input: GetDevicePoolCompatibilityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDevicePoolCompatibilityCommandInput, GetDevicePoolCompatibilityCommandOutput>;
    private serialize;
    private deserialize;
}
