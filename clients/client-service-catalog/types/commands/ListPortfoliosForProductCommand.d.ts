import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListPortfoliosForProductInput, ListPortfoliosForProductOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPortfoliosForProductCommandInput = ListPortfoliosForProductInput;
export declare type ListPortfoliosForProductCommandOutput = ListPortfoliosForProductOutput & __MetadataBearer;
export declare class ListPortfoliosForProductCommand extends $Command<ListPortfoliosForProductCommandInput, ListPortfoliosForProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListPortfoliosForProductCommandInput;
    constructor(input: ListPortfoliosForProductCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPortfoliosForProductCommandInput, ListPortfoliosForProductCommandOutput>;
    private serialize;
    private deserialize;
}
