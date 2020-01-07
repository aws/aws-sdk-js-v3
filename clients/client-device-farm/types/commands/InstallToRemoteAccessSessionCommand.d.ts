import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { InstallToRemoteAccessSessionRequest, InstallToRemoteAccessSessionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type InstallToRemoteAccessSessionCommandInput = InstallToRemoteAccessSessionRequest;
export declare type InstallToRemoteAccessSessionCommandOutput = InstallToRemoteAccessSessionResult & __MetadataBearer;
export declare class InstallToRemoteAccessSessionCommand extends $Command<InstallToRemoteAccessSessionCommandInput, InstallToRemoteAccessSessionCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: InstallToRemoteAccessSessionCommandInput;
    constructor(input: InstallToRemoteAccessSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InstallToRemoteAccessSessionCommandInput, InstallToRemoteAccessSessionCommandOutput>;
    private serialize;
    private deserialize;
}
