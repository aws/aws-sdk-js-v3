import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchAddressBooksRequest, SearchAddressBooksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchAddressBooksCommandInput = SearchAddressBooksRequest;
export declare type SearchAddressBooksCommandOutput = SearchAddressBooksResponse & __MetadataBearer;
export declare class SearchAddressBooksCommand extends $Command<SearchAddressBooksCommandInput, SearchAddressBooksCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: SearchAddressBooksCommandInput;
    constructor(input: SearchAddressBooksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchAddressBooksCommandInput, SearchAddressBooksCommandOutput>;
    private serialize;
    private deserialize;
}
