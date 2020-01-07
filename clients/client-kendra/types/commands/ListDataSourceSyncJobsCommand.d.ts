import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { ListDataSourceSyncJobsRequest, ListDataSourceSyncJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDataSourceSyncJobsCommandInput = ListDataSourceSyncJobsRequest;
export declare type ListDataSourceSyncJobsCommandOutput = ListDataSourceSyncJobsResponse & __MetadataBearer;
export declare class ListDataSourceSyncJobsCommand extends $Command<ListDataSourceSyncJobsCommandInput, ListDataSourceSyncJobsCommandOutput, kendraClientResolvedConfig> {
    readonly input: ListDataSourceSyncJobsCommandInput;
    constructor(input: ListDataSourceSyncJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDataSourceSyncJobsCommandInput, ListDataSourceSyncJobsCommandOutput>;
    private serialize;
    private deserialize;
}
