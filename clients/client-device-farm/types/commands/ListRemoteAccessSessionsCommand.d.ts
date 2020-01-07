import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListRemoteAccessSessionsRequest, ListRemoteAccessSessionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRemoteAccessSessionsCommandInput = ListRemoteAccessSessionsRequest;
export declare type ListRemoteAccessSessionsCommandOutput = ListRemoteAccessSessionsResult & __MetadataBearer;
export declare class ListRemoteAccessSessionsCommand extends $Command<ListRemoteAccessSessionsCommandInput, ListRemoteAccessSessionsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListRemoteAccessSessionsCommandInput;
    constructor(input: ListRemoteAccessSessionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRemoteAccessSessionsCommandInput, ListRemoteAccessSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
