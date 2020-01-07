import { EC2InstanceConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2InstanceConnectClient";
import { SendSSHPublicKeyRequest, SendSSHPublicKeyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendSSHPublicKeyCommandInput = SendSSHPublicKeyRequest;
export declare type SendSSHPublicKeyCommandOutput = SendSSHPublicKeyResponse & __MetadataBearer;
export declare class SendSSHPublicKeyCommand extends $Command<SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput, EC2InstanceConnectClientResolvedConfig> {
    readonly input: SendSSHPublicKeyCommandInput;
    constructor(input: SendSSHPublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2InstanceConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
