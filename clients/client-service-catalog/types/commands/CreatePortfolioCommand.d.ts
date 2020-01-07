import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreatePortfolioInput, CreatePortfolioOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePortfolioCommandInput = CreatePortfolioInput;
export declare type CreatePortfolioCommandOutput = CreatePortfolioOutput & __MetadataBearer;
export declare class CreatePortfolioCommand extends $Command<CreatePortfolioCommandInput, CreatePortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreatePortfolioCommandInput;
    constructor(input: CreatePortfolioCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePortfolioCommandInput, CreatePortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
