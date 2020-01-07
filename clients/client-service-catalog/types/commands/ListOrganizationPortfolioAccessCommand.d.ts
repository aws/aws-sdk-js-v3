import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListOrganizationPortfolioAccessInput, ListOrganizationPortfolioAccessOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListOrganizationPortfolioAccessCommandInput = ListOrganizationPortfolioAccessInput;
export declare type ListOrganizationPortfolioAccessCommandOutput = ListOrganizationPortfolioAccessOutput & __MetadataBearer;
export declare class ListOrganizationPortfolioAccessCommand extends $Command<ListOrganizationPortfolioAccessCommandInput, ListOrganizationPortfolioAccessCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListOrganizationPortfolioAccessCommandInput;
    constructor(input: ListOrganizationPortfolioAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOrganizationPortfolioAccessCommandInput, ListOrganizationPortfolioAccessCommandOutput>;
    private serialize;
    private deserialize;
}
