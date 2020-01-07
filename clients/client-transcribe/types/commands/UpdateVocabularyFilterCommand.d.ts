import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { UpdateVocabularyFilterRequest, UpdateVocabularyFilterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateVocabularyFilterCommandInput = UpdateVocabularyFilterRequest;
export declare type UpdateVocabularyFilterCommandOutput = UpdateVocabularyFilterResponse & __MetadataBearer;
export declare class UpdateVocabularyFilterCommand extends $Command<UpdateVocabularyFilterCommandInput, UpdateVocabularyFilterCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: UpdateVocabularyFilterCommandInput;
    constructor(input: UpdateVocabularyFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVocabularyFilterCommandInput, UpdateVocabularyFilterCommandOutput>;
    private serialize;
    private deserialize;
}
