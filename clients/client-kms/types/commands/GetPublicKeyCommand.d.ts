import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetPublicKeyRequest, GetPublicKeyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPublicKeyCommandInput = GetPublicKeyRequest;
export declare type GetPublicKeyCommandOutput = GetPublicKeyResponse & __MetadataBearer;
export declare class GetPublicKeyCommand extends $Command<GetPublicKeyCommandInput, GetPublicKeyCommandOutput, KMSClientResolvedConfig> {
    readonly input: GetPublicKeyCommandInput;
    constructor(input: GetPublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPublicKeyCommandInput, GetPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
