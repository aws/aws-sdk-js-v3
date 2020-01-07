import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetTranscriptionJobRequest, GetTranscriptionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTranscriptionJobCommandInput = GetTranscriptionJobRequest;
export declare type GetTranscriptionJobCommandOutput = GetTranscriptionJobResponse & __MetadataBearer;
export declare class GetTranscriptionJobCommand extends $Command<GetTranscriptionJobCommandInput, GetTranscriptionJobCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: GetTranscriptionJobCommandInput;
    constructor(input: GetTranscriptionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTranscriptionJobCommandInput, GetTranscriptionJobCommandOutput>;
    private serialize;
    private deserialize;
}
