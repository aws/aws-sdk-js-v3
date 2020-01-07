import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListPrincipalsForPortfolioInput, ListPrincipalsForPortfolioOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPrincipalsForPortfolioCommandInput = ListPrincipalsForPortfolioInput;
export declare type ListPrincipalsForPortfolioCommandOutput = ListPrincipalsForPortfolioOutput & __MetadataBearer;
export declare class ListPrincipalsForPortfolioCommand extends $Command<ListPrincipalsForPortfolioCommandInput, ListPrincipalsForPortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListPrincipalsForPortfolioCommandInput;
    constructor(input: ListPrincipalsForPortfolioCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPrincipalsForPortfolioCommandInput, ListPrincipalsForPortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
