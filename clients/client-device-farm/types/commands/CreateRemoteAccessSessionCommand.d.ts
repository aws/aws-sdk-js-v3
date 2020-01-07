import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateRemoteAccessSessionRequest, CreateRemoteAccessSessionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRemoteAccessSessionCommandInput = CreateRemoteAccessSessionRequest;
export declare type CreateRemoteAccessSessionCommandOutput = CreateRemoteAccessSessionResult & __MetadataBearer;
export declare class CreateRemoteAccessSessionCommand extends $Command<CreateRemoteAccessSessionCommandInput, CreateRemoteAccessSessionCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateRemoteAccessSessionCommandInput;
    constructor(input: CreateRemoteAccessSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRemoteAccessSessionCommandInput, CreateRemoteAccessSessionCommandOutput>;
    private serialize;
    private deserialize;
}
