import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetVocabularyRequest, GetVocabularyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetVocabularyCommandInput = GetVocabularyRequest;
export declare type GetVocabularyCommandOutput = GetVocabularyResponse & __MetadataBearer;
export declare class GetVocabularyCommand extends $Command<GetVocabularyCommandInput, GetVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: GetVocabularyCommandInput;
    constructor(input: GetVocabularyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVocabularyCommandInput, GetVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}
