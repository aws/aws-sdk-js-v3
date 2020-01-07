import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchNetworkProfilesRequest, SearchNetworkProfilesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchNetworkProfilesCommandInput = SearchNetworkProfilesRequest;
export declare type SearchNetworkProfilesCommandOutput = SearchNetworkProfilesResponse & __MetadataBearer;
export declare class SearchNetworkProfilesCommand extends $Command<SearchNetworkProfilesCommandInput, SearchNetworkProfilesCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: SearchNetworkProfilesCommandInput;
    constructor(input: SearchNetworkProfilesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchNetworkProfilesCommandInput, SearchNetworkProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
