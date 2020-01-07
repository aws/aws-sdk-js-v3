import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AssociatePrincipalWithPortfolioInput, AssociatePrincipalWithPortfolioOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociatePrincipalWithPortfolioCommandInput = AssociatePrincipalWithPortfolioInput;
export declare type AssociatePrincipalWithPortfolioCommandOutput = AssociatePrincipalWithPortfolioOutput & __MetadataBearer;
export declare class AssociatePrincipalWithPortfolioCommand extends $Command<AssociatePrincipalWithPortfolioCommandInput, AssociatePrincipalWithPortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: AssociatePrincipalWithPortfolioCommandInput;
    constructor(input: AssociatePrincipalWithPortfolioCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociatePrincipalWithPortfolioCommandInput, AssociatePrincipalWithPortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
