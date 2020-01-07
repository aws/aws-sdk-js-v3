import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchContactsRequest, SearchContactsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchContactsCommandInput = SearchContactsRequest;
export declare type SearchContactsCommandOutput = SearchContactsResponse & __MetadataBearer;
export declare class SearchContactsCommand extends $Command<SearchContactsCommandInput, SearchContactsCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: SearchContactsCommandInput;
    constructor(input: SearchContactsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchContactsCommandInput, SearchContactsCommandOutput>;
    private serialize;
    private deserialize;
}
