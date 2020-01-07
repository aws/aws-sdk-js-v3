import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteSSHPublicKeyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSSHPublicKeyCommandInput = DeleteSSHPublicKeyRequest;
export declare type DeleteSSHPublicKeyCommandOutput = __MetadataBearer;
export declare class DeleteSSHPublicKeyCommand extends $Command<DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteSSHPublicKeyCommandInput;
    constructor(input: DeleteSSHPublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
