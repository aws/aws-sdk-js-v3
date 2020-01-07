import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListVocabulariesRequest, ListVocabulariesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVocabulariesCommandInput = ListVocabulariesRequest;
export declare type ListVocabulariesCommandOutput = ListVocabulariesResponse & __MetadataBearer;
export declare class ListVocabulariesCommand extends $Command<ListVocabulariesCommandInput, ListVocabulariesCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListVocabulariesCommandInput;
    constructor(input: ListVocabulariesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVocabulariesCommandInput, ListVocabulariesCommandOutput>;
    private serialize;
    private deserialize;
}
