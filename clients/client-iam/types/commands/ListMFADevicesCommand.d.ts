import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListMFADevicesRequest, ListMFADevicesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMFADevicesCommandInput = ListMFADevicesRequest;
export declare type ListMFADevicesCommandOutput = ListMFADevicesResponse & __MetadataBearer;
export declare class ListMFADevicesCommand extends $Command<ListMFADevicesCommandInput, ListMFADevicesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListMFADevicesCommandInput;
    constructor(input: ListMFADevicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMFADevicesCommandInput, ListMFADevicesCommandOutput>;
    private serialize;
    private deserialize;
}
