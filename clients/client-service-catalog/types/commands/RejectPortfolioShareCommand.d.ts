import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { RejectPortfolioShareInput, RejectPortfolioShareOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RejectPortfolioShareCommandInput = RejectPortfolioShareInput;
export declare type RejectPortfolioShareCommandOutput = RejectPortfolioShareOutput & __MetadataBearer;
export declare class RejectPortfolioShareCommand extends $Command<RejectPortfolioShareCommandInput, RejectPortfolioShareCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: RejectPortfolioShareCommandInput;
    constructor(input: RejectPortfolioShareCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectPortfolioShareCommandInput, RejectPortfolioShareCommandOutput>;
    private serialize;
    private deserialize;
}
