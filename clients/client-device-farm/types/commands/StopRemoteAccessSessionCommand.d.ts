import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { StopRemoteAccessSessionRequest, StopRemoteAccessSessionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopRemoteAccessSessionCommandInput = StopRemoteAccessSessionRequest;
export declare type StopRemoteAccessSessionCommandOutput = StopRemoteAccessSessionResult & __MetadataBearer;
export declare class StopRemoteAccessSessionCommand extends $Command<StopRemoteAccessSessionCommandInput, StopRemoteAccessSessionCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: StopRemoteAccessSessionCommandInput;
    constructor(input: StopRemoteAccessSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopRemoteAccessSessionCommandInput, StopRemoteAccessSessionCommandOutput>;
    private serialize;
    private deserialize;
}
