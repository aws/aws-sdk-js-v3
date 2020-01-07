import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteVocabularyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteVocabularyCommandInput = DeleteVocabularyRequest;
export declare type DeleteVocabularyCommandOutput = __MetadataBearer;
export declare class DeleteVocabularyCommand extends $Command<DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteVocabularyCommandInput;
    constructor(input: DeleteVocabularyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}
