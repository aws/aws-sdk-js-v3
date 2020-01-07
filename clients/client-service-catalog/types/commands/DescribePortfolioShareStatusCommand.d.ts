import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribePortfolioShareStatusInput, DescribePortfolioShareStatusOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePortfolioShareStatusCommandInput = DescribePortfolioShareStatusInput;
export declare type DescribePortfolioShareStatusCommandOutput = DescribePortfolioShareStatusOutput & __MetadataBearer;
export declare class DescribePortfolioShareStatusCommand extends $Command<DescribePortfolioShareStatusCommandInput, DescribePortfolioShareStatusCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribePortfolioShareStatusCommandInput;
    constructor(input: DescribePortfolioShareStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePortfolioShareStatusCommandInput, DescribePortfolioShareStatusCommandOutput>;
    private serialize;
    private deserialize;
}
