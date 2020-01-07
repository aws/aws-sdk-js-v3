import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GenerateDataKeyPairWithoutPlaintextRequest, GenerateDataKeyPairWithoutPlaintextResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GenerateDataKeyPairWithoutPlaintextCommandInput = GenerateDataKeyPairWithoutPlaintextRequest;
export declare type GenerateDataKeyPairWithoutPlaintextCommandOutput = GenerateDataKeyPairWithoutPlaintextResponse & __MetadataBearer;
export declare class GenerateDataKeyPairWithoutPlaintextCommand extends $Command<GenerateDataKeyPairWithoutPlaintextCommandInput, GenerateDataKeyPairWithoutPlaintextCommandOutput, KMSClientResolvedConfig> {
    readonly input: GenerateDataKeyPairWithoutPlaintextCommandInput;
    constructor(input: GenerateDataKeyPairWithoutPlaintextCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateDataKeyPairWithoutPlaintextCommandInput, GenerateDataKeyPairWithoutPlaintextCommandOutput>;
    private serialize;
    private deserialize;
}
