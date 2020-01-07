import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { StopTextTranslationJobRequest, StopTextTranslationJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopTextTranslationJobCommandInput = StopTextTranslationJobRequest;
export declare type StopTextTranslationJobCommandOutput = StopTextTranslationJobResponse & __MetadataBearer;
export declare class StopTextTranslationJobCommand extends $Command<StopTextTranslationJobCommandInput, StopTextTranslationJobCommandOutput, TranslateClientResolvedConfig> {
    readonly input: StopTextTranslationJobCommandInput;
    constructor(input: StopTextTranslationJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopTextTranslationJobCommandInput, StopTextTranslationJobCommandOutput>;
    private serialize;
    private deserialize;
}
