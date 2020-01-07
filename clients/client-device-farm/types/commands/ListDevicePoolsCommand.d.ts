import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListDevicePoolsRequest, ListDevicePoolsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDevicePoolsCommandInput = ListDevicePoolsRequest;
export declare type ListDevicePoolsCommandOutput = ListDevicePoolsResult & __MetadataBearer;
export declare class ListDevicePoolsCommand extends $Command<ListDevicePoolsCommandInput, ListDevicePoolsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListDevicePoolsCommandInput;
    constructor(input: ListDevicePoolsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDevicePoolsCommandInput, ListDevicePoolsCommandOutput>;
    private serialize;
    private deserialize;
}
