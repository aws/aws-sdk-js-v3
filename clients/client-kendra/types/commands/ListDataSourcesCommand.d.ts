import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { ListDataSourcesRequest, ListDataSourcesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDataSourcesCommandInput = ListDataSourcesRequest;
export declare type ListDataSourcesCommandOutput = ListDataSourcesResponse & __MetadataBearer;
export declare class ListDataSourcesCommand extends $Command<ListDataSourcesCommandInput, ListDataSourcesCommandOutput, kendraClientResolvedConfig> {
    readonly input: ListDataSourcesCommandInput;
    constructor(input: ListDataSourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDataSourcesCommandInput, ListDataSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
