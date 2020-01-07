import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { ListAgentsRequest, ListAgentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAgentsCommandInput = ListAgentsRequest;
export declare type ListAgentsCommandOutput = ListAgentsResponse & __MetadataBearer;
export declare class ListAgentsCommand extends $Command<ListAgentsCommandInput, ListAgentsCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: ListAgentsCommandInput;
    constructor(input: ListAgentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAgentsCommandInput, ListAgentsCommandOutput>;
    private serialize;
    private deserialize;
}
