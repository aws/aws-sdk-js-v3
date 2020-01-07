import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DetectDominantLanguageRequest, DetectDominantLanguageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectDominantLanguageCommandInput = DetectDominantLanguageRequest;
export declare type DetectDominantLanguageCommandOutput = DetectDominantLanguageResponse & __MetadataBearer;
export declare class DetectDominantLanguageCommand extends $Command<DetectDominantLanguageCommandInput, DetectDominantLanguageCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DetectDominantLanguageCommandInput;
    constructor(input: DetectDominantLanguageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectDominantLanguageCommandInput, DetectDominantLanguageCommandOutput>;
    private serialize;
    private deserialize;
}
