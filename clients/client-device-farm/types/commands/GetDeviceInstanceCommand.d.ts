import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetDeviceInstanceRequest, GetDeviceInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeviceInstanceCommandInput = GetDeviceInstanceRequest;
export declare type GetDeviceInstanceCommandOutput = GetDeviceInstanceResult & __MetadataBearer;
export declare class GetDeviceInstanceCommand extends $Command<GetDeviceInstanceCommandInput, GetDeviceInstanceCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetDeviceInstanceCommandInput;
    constructor(input: GetDeviceInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeviceInstanceCommandInput, GetDeviceInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
