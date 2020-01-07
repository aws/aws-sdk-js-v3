import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListAcceptedPortfolioSharesInput, ListAcceptedPortfolioSharesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAcceptedPortfolioSharesCommandInput = ListAcceptedPortfolioSharesInput;
export declare type ListAcceptedPortfolioSharesCommandOutput = ListAcceptedPortfolioSharesOutput & __MetadataBearer;
export declare class ListAcceptedPortfolioSharesCommand extends $Command<ListAcceptedPortfolioSharesCommandInput, ListAcceptedPortfolioSharesCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListAcceptedPortfolioSharesCommandInput;
    constructor(input: ListAcceptedPortfolioSharesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAcceptedPortfolioSharesCommandInput, ListAcceptedPortfolioSharesCommandOutput>;
    private serialize;
    private deserialize;
}
