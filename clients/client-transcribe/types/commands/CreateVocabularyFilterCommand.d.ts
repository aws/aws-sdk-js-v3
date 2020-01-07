import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { CreateVocabularyFilterRequest, CreateVocabularyFilterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVocabularyFilterCommandInput = CreateVocabularyFilterRequest;
export declare type CreateVocabularyFilterCommandOutput = CreateVocabularyFilterResponse & __MetadataBearer;
export declare class CreateVocabularyFilterCommand extends $Command<CreateVocabularyFilterCommandInput, CreateVocabularyFilterCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: CreateVocabularyFilterCommandInput;
    constructor(input: CreateVocabularyFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVocabularyFilterCommandInput, CreateVocabularyFilterCommandOutput>;
    private serialize;
    private deserialize;
}
