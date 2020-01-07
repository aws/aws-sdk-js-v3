import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeletePortfolioShareInput, DeletePortfolioShareOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePortfolioShareCommandInput = DeletePortfolioShareInput;
export declare type DeletePortfolioShareCommandOutput = DeletePortfolioShareOutput & __MetadataBearer;
export declare class DeletePortfolioShareCommand extends $Command<DeletePortfolioShareCommandInput, DeletePortfolioShareCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeletePortfolioShareCommandInput;
    constructor(input: DeletePortfolioShareCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePortfolioShareCommandInput, DeletePortfolioShareCommandOutput>;
    private serialize;
    private deserialize;
}
