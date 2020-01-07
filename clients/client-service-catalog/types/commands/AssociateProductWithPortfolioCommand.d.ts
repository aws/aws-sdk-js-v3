import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AssociateProductWithPortfolioInput, AssociateProductWithPortfolioOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateProductWithPortfolioCommandInput = AssociateProductWithPortfolioInput;
export declare type AssociateProductWithPortfolioCommandOutput = AssociateProductWithPortfolioOutput & __MetadataBearer;
export declare class AssociateProductWithPortfolioCommand extends $Command<AssociateProductWithPortfolioCommandInput, AssociateProductWithPortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: AssociateProductWithPortfolioCommandInput;
    constructor(input: AssociateProductWithPortfolioCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateProductWithPortfolioCommandInput, AssociateProductWithPortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
