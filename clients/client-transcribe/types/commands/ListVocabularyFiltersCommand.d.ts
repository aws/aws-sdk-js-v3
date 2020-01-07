import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListVocabularyFiltersRequest, ListVocabularyFiltersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVocabularyFiltersCommandInput = ListVocabularyFiltersRequest;
export declare type ListVocabularyFiltersCommandOutput = ListVocabularyFiltersResponse & __MetadataBearer;
export declare class ListVocabularyFiltersCommand extends $Command<ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListVocabularyFiltersCommandInput;
    constructor(input: ListVocabularyFiltersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput>;
    private serialize;
    private deserialize;
}
