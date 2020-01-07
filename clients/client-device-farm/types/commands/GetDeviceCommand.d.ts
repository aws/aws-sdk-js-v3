import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetDeviceRequest, GetDeviceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeviceCommandInput = GetDeviceRequest;
export declare type GetDeviceCommandOutput = GetDeviceResult & __MetadataBearer;
export declare class GetDeviceCommand extends $Command<GetDeviceCommandInput, GetDeviceCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetDeviceCommandInput;
    constructor(input: GetDeviceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeviceCommandInput, GetDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
