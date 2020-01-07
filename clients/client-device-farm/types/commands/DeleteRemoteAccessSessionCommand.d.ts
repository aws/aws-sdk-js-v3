import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteRemoteAccessSessionRequest, DeleteRemoteAccessSessionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRemoteAccessSessionCommandInput = DeleteRemoteAccessSessionRequest;
export declare type DeleteRemoteAccessSessionCommandOutput = DeleteRemoteAccessSessionResult & __MetadataBearer;
export declare class DeleteRemoteAccessSessionCommand extends $Command<DeleteRemoteAccessSessionCommandInput, DeleteRemoteAccessSessionCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteRemoteAccessSessionCommandInput;
    constructor(input: DeleteRemoteAccessSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRemoteAccessSessionCommandInput, DeleteRemoteAccessSessionCommandOutput>;
    private serialize;
    private deserialize;
}
