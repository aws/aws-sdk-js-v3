import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisassociateProductFromPortfolioInput, DisassociateProductFromPortfolioOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateProductFromPortfolioCommandInput = DisassociateProductFromPortfolioInput;
export declare type DisassociateProductFromPortfolioCommandOutput = DisassociateProductFromPortfolioOutput & __MetadataBearer;
export declare class DisassociateProductFromPortfolioCommand extends $Command<DisassociateProductFromPortfolioCommandInput, DisassociateProductFromPortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DisassociateProductFromPortfolioCommandInput;
    constructor(input: DisassociateProductFromPortfolioCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateProductFromPortfolioCommandInput, DisassociateProductFromPortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
