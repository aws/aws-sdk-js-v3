import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteVocabularyFilterRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVocabularyFilterCommandInput = DeleteVocabularyFilterRequest;
export declare type DeleteVocabularyFilterCommandOutput = __MetadataBearer;
export declare class DeleteVocabularyFilterCommand extends $Command<DeleteVocabularyFilterCommandInput, DeleteVocabularyFilterCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteVocabularyFilterCommandInput;
    constructor(input: DeleteVocabularyFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVocabularyFilterCommandInput, DeleteVocabularyFilterCommandOutput>;
    private serialize;
    private deserialize;
}
