import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { SearchProductsInput, SearchProductsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchProductsCommandInput = SearchProductsInput;
export declare type SearchProductsCommandOutput = SearchProductsOutput & __MetadataBearer;
export declare class SearchProductsCommand extends $Command<SearchProductsCommandInput, SearchProductsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: SearchProductsCommandInput;
    constructor(input: SearchProductsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchProductsCommandInput, SearchProductsCommandOutput>;
    private serialize;
    private deserialize;
}
