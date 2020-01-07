import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListDeviceInstancesRequest, ListDeviceInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeviceInstancesCommandInput = ListDeviceInstancesRequest;
export declare type ListDeviceInstancesCommandOutput = ListDeviceInstancesResult & __MetadataBearer;
export declare class ListDeviceInstancesCommand extends $Command<ListDeviceInstancesCommandInput, ListDeviceInstancesCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListDeviceInstancesCommandInput;
    constructor(input: ListDeviceInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeviceInstancesCommandInput, ListDeviceInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
