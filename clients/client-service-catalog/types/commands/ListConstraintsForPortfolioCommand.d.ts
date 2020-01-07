import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListConstraintsForPortfolioInput, ListConstraintsForPortfolioOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListConstraintsForPortfolioCommandInput = ListConstraintsForPortfolioInput;
export declare type ListConstraintsForPortfolioCommandOutput = ListConstraintsForPortfolioOutput & __MetadataBearer;
export declare class ListConstraintsForPortfolioCommand extends $Command<ListConstraintsForPortfolioCommandInput, ListConstraintsForPortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListConstraintsForPortfolioCommandInput;
    constructor(input: ListConstraintsForPortfolioCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConstraintsForPortfolioCommandInput, ListConstraintsForPortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
