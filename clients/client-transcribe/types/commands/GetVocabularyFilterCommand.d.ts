import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetVocabularyFilterRequest, GetVocabularyFilterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetVocabularyFilterCommandInput = GetVocabularyFilterRequest;
export declare type GetVocabularyFilterCommandOutput = GetVocabularyFilterResponse & __MetadataBearer;
export declare class GetVocabularyFilterCommand extends $Command<GetVocabularyFilterCommandInput, GetVocabularyFilterCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: GetVocabularyFilterCommandInput;
    constructor(input: GetVocabularyFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVocabularyFilterCommandInput, GetVocabularyFilterCommandOutput>;
    private serialize;
    private deserialize;
}
