import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListVirtualMFADevicesRequest, ListVirtualMFADevicesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVirtualMFADevicesCommandInput = ListVirtualMFADevicesRequest;
export declare type ListVirtualMFADevicesCommandOutput = ListVirtualMFADevicesResponse & __MetadataBearer;
export declare class ListVirtualMFADevicesCommand extends $Command<ListVirtualMFADevicesCommandInput, ListVirtualMFADevicesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListVirtualMFADevicesCommandInput;
    constructor(input: ListVirtualMFADevicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVirtualMFADevicesCommandInput, ListVirtualMFADevicesCommandOutput>;
    private serialize;
    private deserialize;
}
