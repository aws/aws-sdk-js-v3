import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchProfilesRequest, SearchProfilesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchProfilesCommandInput = SearchProfilesRequest;
export declare type SearchProfilesCommandOutput = SearchProfilesResponse & __MetadataBearer;
export declare class SearchProfilesCommand extends $Command<SearchProfilesCommandInput, SearchProfilesCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: SearchProfilesCommandInput;
    constructor(input: SearchProfilesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchProfilesCommandInput, SearchProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
