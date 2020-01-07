import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { GetDeviceMethodsRequest, GetDeviceMethodsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeviceMethodsCommandInput = GetDeviceMethodsRequest;
export declare type GetDeviceMethodsCommandOutput = GetDeviceMethodsResponse & __MetadataBearer;
export declare class GetDeviceMethodsCommand extends $Command<GetDeviceMethodsCommandInput, GetDeviceMethodsCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: GetDeviceMethodsCommandInput;
    constructor(input: GetDeviceMethodsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeviceMethodsCommandInput, GetDeviceMethodsCommandOutput>;
    private serialize;
    private deserialize;
}
