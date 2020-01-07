import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListBatchInferenceJobsRequest, ListBatchInferenceJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBatchInferenceJobsCommandInput = ListBatchInferenceJobsRequest;
export declare type ListBatchInferenceJobsCommandOutput = ListBatchInferenceJobsResponse & __MetadataBearer;
export declare class ListBatchInferenceJobsCommand extends $Command<ListBatchInferenceJobsCommandInput, ListBatchInferenceJobsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListBatchInferenceJobsCommandInput;
    constructor(input: ListBatchInferenceJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBatchInferenceJobsCommandInput, ListBatchInferenceJobsCommandOutput>;
    private serialize;
    private deserialize;
}
