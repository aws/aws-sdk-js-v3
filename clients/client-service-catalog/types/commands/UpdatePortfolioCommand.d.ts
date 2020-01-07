import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdatePortfolioInput, UpdatePortfolioOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePortfolioCommandInput = UpdatePortfolioInput;
export declare type UpdatePortfolioCommandOutput = UpdatePortfolioOutput & __MetadataBearer;
export declare class UpdatePortfolioCommand extends $Command<UpdatePortfolioCommandInput, UpdatePortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdatePortfolioCommandInput;
    constructor(input: UpdatePortfolioCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePortfolioCommandInput, UpdatePortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
