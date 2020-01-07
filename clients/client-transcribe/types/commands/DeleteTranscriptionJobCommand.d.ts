import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteTranscriptionJobRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTranscriptionJobCommandInput = DeleteTranscriptionJobRequest;
export declare type DeleteTranscriptionJobCommandOutput = __MetadataBearer;
export declare class DeleteTranscriptionJobCommand extends $Command<DeleteTranscriptionJobCommandInput, DeleteTranscriptionJobCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteTranscriptionJobCommandInput;
    constructor(input: DeleteTranscriptionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTranscriptionJobCommandInput, DeleteTranscriptionJobCommandOutput>;
    private serialize;
    private deserialize;
}
