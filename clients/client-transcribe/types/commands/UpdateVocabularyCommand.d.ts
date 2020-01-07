import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { UpdateVocabularyRequest, UpdateVocabularyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateVocabularyCommandInput = UpdateVocabularyRequest;
export declare type UpdateVocabularyCommandOutput = UpdateVocabularyResponse & __MetadataBearer;
export declare class UpdateVocabularyCommand extends $Command<UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: UpdateVocabularyCommandInput;
    constructor(input: UpdateVocabularyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}
