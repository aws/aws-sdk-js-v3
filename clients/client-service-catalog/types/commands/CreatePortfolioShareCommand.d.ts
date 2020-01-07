import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreatePortfolioShareInput, CreatePortfolioShareOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePortfolioShareCommandInput = CreatePortfolioShareInput;
export declare type CreatePortfolioShareCommandOutput = CreatePortfolioShareOutput & __MetadataBearer;
export declare class CreatePortfolioShareCommand extends $Command<CreatePortfolioShareCommandInput, CreatePortfolioShareCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreatePortfolioShareCommandInput;
    constructor(input: CreatePortfolioShareCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePortfolioShareCommandInput, CreatePortfolioShareCommandOutput>;
    private serialize;
    private deserialize;
}
