import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AcceptPortfolioShareInput, AcceptPortfolioShareOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptPortfolioShareCommandInput = AcceptPortfolioShareInput;
export declare type AcceptPortfolioShareCommandOutput = AcceptPortfolioShareOutput & __MetadataBearer;
export declare class AcceptPortfolioShareCommand extends $Command<AcceptPortfolioShareCommandInput, AcceptPortfolioShareCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: AcceptPortfolioShareCommandInput;
    constructor(input: AcceptPortfolioShareCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptPortfolioShareCommandInput, AcceptPortfolioShareCommandOutput>;
    private serialize;
    private deserialize;
}
