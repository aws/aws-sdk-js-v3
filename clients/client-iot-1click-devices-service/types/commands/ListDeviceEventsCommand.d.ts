import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { ListDeviceEventsRequest, ListDeviceEventsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeviceEventsCommandInput = ListDeviceEventsRequest;
export declare type ListDeviceEventsCommandOutput = ListDeviceEventsResponse & __MetadataBearer;
export declare class ListDeviceEventsCommand extends $Command<ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: ListDeviceEventsCommandInput;
    constructor(input: ListDeviceEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput>;
    private serialize;
    private deserialize;
}
