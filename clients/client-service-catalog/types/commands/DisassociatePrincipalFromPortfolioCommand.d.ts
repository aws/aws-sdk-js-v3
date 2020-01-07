import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisassociatePrincipalFromPortfolioInput, DisassociatePrincipalFromPortfolioOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociatePrincipalFromPortfolioCommandInput = DisassociatePrincipalFromPortfolioInput;
export declare type DisassociatePrincipalFromPortfolioCommandOutput = DisassociatePrincipalFromPortfolioOutput & __MetadataBearer;
export declare class DisassociatePrincipalFromPortfolioCommand extends $Command<DisassociatePrincipalFromPortfolioCommandInput, DisassociatePrincipalFromPortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DisassociatePrincipalFromPortfolioCommandInput;
    constructor(input: DisassociatePrincipalFromPortfolioCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociatePrincipalFromPortfolioCommandInput, DisassociatePrincipalFromPortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
