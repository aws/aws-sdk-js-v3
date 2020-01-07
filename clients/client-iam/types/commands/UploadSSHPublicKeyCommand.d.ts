import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UploadSSHPublicKeyRequest, UploadSSHPublicKeyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UploadSSHPublicKeyCommandInput = UploadSSHPublicKeyRequest;
export declare type UploadSSHPublicKeyCommandOutput = UploadSSHPublicKeyResponse & __MetadataBearer;
export declare class UploadSSHPublicKeyCommand extends $Command<UploadSSHPublicKeyCommandInput, UploadSSHPublicKeyCommandOutput, IAMClientResolvedConfig> {
    readonly input: UploadSSHPublicKeyCommandInput;
    constructor(input: UploadSSHPublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UploadSSHPublicKeyCommandInput, UploadSSHPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
