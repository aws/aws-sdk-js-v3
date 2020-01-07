import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GenerateDataKeyPairRequest, GenerateDataKeyPairResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GenerateDataKeyPairCommandInput = GenerateDataKeyPairRequest;
export declare type GenerateDataKeyPairCommandOutput = GenerateDataKeyPairResponse & __MetadataBearer;
export declare class GenerateDataKeyPairCommand extends $Command<GenerateDataKeyPairCommandInput, GenerateDataKeyPairCommandOutput, KMSClientResolvedConfig> {
    readonly input: GenerateDataKeyPairCommandInput;
    constructor(input: GenerateDataKeyPairCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateDataKeyPairCommandInput, GenerateDataKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
