import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { SearchRequest, SearchResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchCommandInput = SearchRequest;
export declare type SearchCommandOutput = SearchResponse & __MetadataBearer;
export declare class SearchCommand extends $Command<SearchCommandInput, SearchCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: SearchCommandInput;
    constructor(input: SearchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchCommandInput, SearchCommandOutput>;
    private serialize;
    private deserialize;
}
