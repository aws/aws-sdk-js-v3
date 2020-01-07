import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { SearchTablesRequest, SearchTablesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchTablesCommandInput = SearchTablesRequest;
export declare type SearchTablesCommandOutput = SearchTablesResponse & __MetadataBearer;
export declare class SearchTablesCommand extends $Command<SearchTablesCommandInput, SearchTablesCommandOutput, GlueClientResolvedConfig> {
    readonly input: SearchTablesCommandInput;
    constructor(input: SearchTablesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchTablesCommandInput, SearchTablesCommandOutput>;
    private serialize;
    private deserialize;
}
