import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { SearchProductsAsAdminInput, SearchProductsAsAdminOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchProductsAsAdminCommandInput = SearchProductsAsAdminInput;
export declare type SearchProductsAsAdminCommandOutput = SearchProductsAsAdminOutput & __MetadataBearer;
export declare class SearchProductsAsAdminCommand extends $Command<SearchProductsAsAdminCommandInput, SearchProductsAsAdminCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: SearchProductsAsAdminCommandInput;
    constructor(input: SearchProductsAsAdminCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchProductsAsAdminCommandInput, SearchProductsAsAdminCommandOutput>;
    private serialize;
    private deserialize;
}
