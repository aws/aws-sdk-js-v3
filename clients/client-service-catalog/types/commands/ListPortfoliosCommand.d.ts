import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListPortfoliosInput, ListPortfoliosOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPortfoliosCommandInput = ListPortfoliosInput;
export declare type ListPortfoliosCommandOutput = ListPortfoliosOutput & __MetadataBearer;
export declare class ListPortfoliosCommand extends $Command<ListPortfoliosCommandInput, ListPortfoliosCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListPortfoliosCommandInput;
    constructor(input: ListPortfoliosCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPortfoliosCommandInput, ListPortfoliosCommandOutput>;
    private serialize;
    private deserialize;
}
