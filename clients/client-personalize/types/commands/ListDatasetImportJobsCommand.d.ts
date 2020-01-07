import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListDatasetImportJobsRequest, ListDatasetImportJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDatasetImportJobsCommandInput = ListDatasetImportJobsRequest;
export declare type ListDatasetImportJobsCommandOutput = ListDatasetImportJobsResponse & __MetadataBearer;
export declare class ListDatasetImportJobsCommand extends $Command<ListDatasetImportJobsCommandInput, ListDatasetImportJobsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListDatasetImportJobsCommandInput;
    constructor(input: ListDatasetImportJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatasetImportJobsCommandInput, ListDatasetImportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
