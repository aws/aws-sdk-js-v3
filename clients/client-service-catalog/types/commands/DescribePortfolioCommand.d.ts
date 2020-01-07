import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribePortfolioInput, DescribePortfolioOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePortfolioCommandInput = DescribePortfolioInput;
export declare type DescribePortfolioCommandOutput = DescribePortfolioOutput & __MetadataBearer;
export declare class DescribePortfolioCommand extends $Command<DescribePortfolioCommandInput, DescribePortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribePortfolioCommandInput;
    constructor(input: DescribePortfolioCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePortfolioCommandInput, DescribePortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
