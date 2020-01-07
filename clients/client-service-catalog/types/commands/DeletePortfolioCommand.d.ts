import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeletePortfolioInput, DeletePortfolioOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePortfolioCommandInput = DeletePortfolioInput;
export declare type DeletePortfolioCommandOutput = DeletePortfolioOutput & __MetadataBearer;
export declare class DeletePortfolioCommand extends $Command<DeletePortfolioCommandInput, DeletePortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeletePortfolioCommandInput;
    constructor(input: DeletePortfolioCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePortfolioCommandInput, DeletePortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
