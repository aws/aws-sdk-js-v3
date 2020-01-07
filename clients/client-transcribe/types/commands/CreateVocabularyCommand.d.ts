import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { CreateVocabularyRequest, CreateVocabularyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVocabularyCommandInput = CreateVocabularyRequest;
export declare type CreateVocabularyCommandOutput = CreateVocabularyResponse & __MetadataBearer;
export declare class CreateVocabularyCommand extends $Command<CreateVocabularyCommandInput, CreateVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: CreateVocabularyCommandInput;
    constructor(input: CreateVocabularyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVocabularyCommandInput, CreateVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}
