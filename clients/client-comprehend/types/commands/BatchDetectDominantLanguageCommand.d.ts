import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { BatchDetectDominantLanguageRequest, BatchDetectDominantLanguageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDetectDominantLanguageCommandInput = BatchDetectDominantLanguageRequest;
export declare type BatchDetectDominantLanguageCommandOutput = BatchDetectDominantLanguageResponse & __MetadataBearer;
export declare class BatchDetectDominantLanguageCommand extends $Command<BatchDetectDominantLanguageCommandInput, BatchDetectDominantLanguageCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: BatchDetectDominantLanguageCommandInput;
    constructor(input: BatchDetectDominantLanguageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDetectDominantLanguageCommandInput, BatchDetectDominantLanguageCommandOutput>;
    private serialize;
    private deserialize;
}
