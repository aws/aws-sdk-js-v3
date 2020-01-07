import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GenerateDataKeyRequest, GenerateDataKeyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GenerateDataKeyCommandInput = GenerateDataKeyRequest;
export declare type GenerateDataKeyCommandOutput = GenerateDataKeyResponse & __MetadataBearer;
export declare class GenerateDataKeyCommand extends $Command<GenerateDataKeyCommandInput, GenerateDataKeyCommandOutput, KMSClientResolvedConfig> {
    readonly input: GenerateDataKeyCommandInput;
    constructor(input: GenerateDataKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateDataKeyCommandInput, GenerateDataKeyCommandOutput>;
    private serialize;
    private deserialize;
}
