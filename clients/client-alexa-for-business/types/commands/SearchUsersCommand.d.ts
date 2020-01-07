import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchUsersRequest, SearchUsersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchUsersCommandInput = SearchUsersRequest;
export declare type SearchUsersCommandOutput = SearchUsersResponse & __MetadataBearer;
export declare class SearchUsersCommand extends $Command<SearchUsersCommandInput, SearchUsersCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: SearchUsersCommandInput;
    constructor(input: SearchUsersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchUsersCommandInput, SearchUsersCommandOutput>;
    private serialize;
    private deserialize;
}
