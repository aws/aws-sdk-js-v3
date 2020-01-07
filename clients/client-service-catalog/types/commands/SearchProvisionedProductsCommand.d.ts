import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { SearchProvisionedProductsInput, SearchProvisionedProductsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchProvisionedProductsCommandInput = SearchProvisionedProductsInput;
export declare type SearchProvisionedProductsCommandOutput = SearchProvisionedProductsOutput & __MetadataBearer;
export declare class SearchProvisionedProductsCommand extends $Command<SearchProvisionedProductsCommandInput, SearchProvisionedProductsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: SearchProvisionedProductsCommandInput;
    constructor(input: SearchProvisionedProductsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchProvisionedProductsCommandInput, SearchProvisionedProductsCommandOutput>;
    private serialize;
    private deserialize;
}
