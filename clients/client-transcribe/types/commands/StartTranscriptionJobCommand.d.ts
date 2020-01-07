import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { StartTranscriptionJobRequest, StartTranscriptionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartTranscriptionJobCommandInput = StartTranscriptionJobRequest;
export declare type StartTranscriptionJobCommandOutput = StartTranscriptionJobResponse & __MetadataBearer;
export declare class StartTranscriptionJobCommand extends $Command<StartTranscriptionJobCommandInput, StartTranscriptionJobCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: StartTranscriptionJobCommandInput;
    constructor(input: StartTranscriptionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTranscriptionJobCommandInput, StartTranscriptionJobCommandOutput>;
    private serialize;
    private deserialize;
}
