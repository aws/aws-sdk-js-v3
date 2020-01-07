import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetRemoteAccessSessionRequest, GetRemoteAccessSessionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRemoteAccessSessionCommandInput = GetRemoteAccessSessionRequest;
export declare type GetRemoteAccessSessionCommandOutput = GetRemoteAccessSessionResult & __MetadataBearer;
export declare class GetRemoteAccessSessionCommand extends $Command<GetRemoteAccessSessionCommandInput, GetRemoteAccessSessionCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetRemoteAccessSessionCommandInput;
    constructor(input: GetRemoteAccessSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRemoteAccessSessionCommandInput, GetRemoteAccessSessionCommandOutput>;
    private serialize;
    private deserialize;
}
