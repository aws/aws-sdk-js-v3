import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchRoomsRequest, SearchRoomsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchRoomsCommandInput = SearchRoomsRequest;
export declare type SearchRoomsCommandOutput = SearchRoomsResponse & __MetadataBearer;
export declare class SearchRoomsCommand extends $Command<SearchRoomsCommandInput, SearchRoomsCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: SearchRoomsCommandInput;
    constructor(input: SearchRoomsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchRoomsCommandInput, SearchRoomsCommandOutput>;
    private serialize;
    private deserialize;
}
