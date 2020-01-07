import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GenerateRandomRequest, GenerateRandomResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GenerateRandomCommandInput = GenerateRandomRequest;
export declare type GenerateRandomCommandOutput = GenerateRandomResponse & __MetadataBearer;
export declare class GenerateRandomCommand extends $Command<GenerateRandomCommandInput, GenerateRandomCommandOutput, KMSClientResolvedConfig> {
    readonly input: GenerateRandomCommandInput;
    constructor(input: GenerateRandomCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateRandomCommandInput, GenerateRandomCommandOutput>;
    private serialize;
    private deserialize;
}
