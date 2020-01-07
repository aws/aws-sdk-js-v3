import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GenerateDataKeyWithoutPlaintextRequest, GenerateDataKeyWithoutPlaintextResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GenerateDataKeyWithoutPlaintextCommandInput = GenerateDataKeyWithoutPlaintextRequest;
export declare type GenerateDataKeyWithoutPlaintextCommandOutput = GenerateDataKeyWithoutPlaintextResponse & __MetadataBearer;
export declare class GenerateDataKeyWithoutPlaintextCommand extends $Command<GenerateDataKeyWithoutPlaintextCommandInput, GenerateDataKeyWithoutPlaintextCommandOutput, KMSClientResolvedConfig> {
    readonly input: GenerateDataKeyWithoutPlaintextCommandInput;
    constructor(input: GenerateDataKeyWithoutPlaintextCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateDataKeyWithoutPlaintextCommandInput, GenerateDataKeyWithoutPlaintextCommandOutput>;
    private serialize;
    private deserialize;
}
