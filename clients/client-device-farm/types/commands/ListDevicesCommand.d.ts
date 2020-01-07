import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListDevicesRequest, ListDevicesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDevicesCommandInput = ListDevicesRequest;
export declare type ListDevicesCommandOutput = ListDevicesResult & __MetadataBearer;
export declare class ListDevicesCommand extends $Command<ListDevicesCommandInput, ListDevicesCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListDevicesCommandInput;
    constructor(input: ListDevicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDevicesCommandInput, ListDevicesCommandOutput>;
    private serialize;
    private deserialize;
}
