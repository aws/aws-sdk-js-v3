import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListPortfolioAccessInput, ListPortfolioAccessOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPortfolioAccessCommandInput = ListPortfolioAccessInput;
export declare type ListPortfolioAccessCommandOutput = ListPortfolioAccessOutput & __MetadataBearer;
export declare class ListPortfolioAccessCommand extends $Command<ListPortfolioAccessCommandInput, ListPortfolioAccessCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListPortfolioAccessCommandInput;
    constructor(input: ListPortfolioAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPortfolioAccessCommandInput, ListPortfolioAccessCommandOutput>;
    private serialize;
    private deserialize;
}
