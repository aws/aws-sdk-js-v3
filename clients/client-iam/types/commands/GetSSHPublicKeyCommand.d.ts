import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetSSHPublicKeyRequest, GetSSHPublicKeyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSSHPublicKeyCommandInput = GetSSHPublicKeyRequest;
export declare type GetSSHPublicKeyCommandOutput = GetSSHPublicKeyResponse & __MetadataBearer;
export declare class GetSSHPublicKeyCommand extends $Command<GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetSSHPublicKeyCommandInput;
    constructor(input: GetSSHPublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
