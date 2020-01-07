import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { StartTextTranslationJobRequest, StartTextTranslationJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartTextTranslationJobCommandInput = StartTextTranslationJobRequest;
export declare type StartTextTranslationJobCommandOutput = StartTextTranslationJobResponse & __MetadataBearer;
export declare class StartTextTranslationJobCommand extends $Command<StartTextTranslationJobCommandInput, StartTextTranslationJobCommandOutput, TranslateClientResolvedConfig> {
    readonly input: StartTextTranslationJobCommandInput;
    constructor(input: StartTextTranslationJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTextTranslationJobCommandInput, StartTextTranslationJobCommandOutput>;
    private serialize;
    private deserialize;
}
