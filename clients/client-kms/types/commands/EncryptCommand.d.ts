import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { EncryptRequest, EncryptResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EncryptCommandInput = EncryptRequest;
export declare type EncryptCommandOutput = EncryptResponse & __MetadataBearer;
export declare class EncryptCommand extends $Command<EncryptCommandInput, EncryptCommandOutput, KMSClientResolvedConfig> {
    readonly input: EncryptCommandInput;
    constructor(input: EncryptCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EncryptCommandInput, EncryptCommandOutput>;
    private serialize;
    private deserialize;
}
