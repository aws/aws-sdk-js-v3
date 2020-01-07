import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListTranscriptionJobsRequest, ListTranscriptionJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTranscriptionJobsCommandInput = ListTranscriptionJobsRequest;
export declare type ListTranscriptionJobsCommandOutput = ListTranscriptionJobsResponse & __MetadataBearer;
export declare class ListTranscriptionJobsCommand extends $Command<ListTranscriptionJobsCommandInput, ListTranscriptionJobsCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListTranscriptionJobsCommandInput;
    constructor(input: ListTranscriptionJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTranscriptionJobsCommandInput, ListTranscriptionJobsCommandOutput>;
    private serialize;
    private deserialize;
}
