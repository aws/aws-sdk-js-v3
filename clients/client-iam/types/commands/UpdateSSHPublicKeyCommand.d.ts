import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateSSHPublicKeyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSSHPublicKeyCommandInput = UpdateSSHPublicKeyRequest;
export declare type UpdateSSHPublicKeyCommandOutput = __MetadataBearer;
export declare class UpdateSSHPublicKeyCommand extends $Command<UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateSSHPublicKeyCommandInput;
    constructor(input: UpdateSSHPublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
