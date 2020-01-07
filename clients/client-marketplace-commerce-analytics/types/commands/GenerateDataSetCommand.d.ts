import { MarketplaceCommerceAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceCommerceAnalyticsClient";
import { GenerateDataSetRequest, GenerateDataSetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GenerateDataSetCommandInput = GenerateDataSetRequest;
export declare type GenerateDataSetCommandOutput = GenerateDataSetResult & __MetadataBearer;
export declare class GenerateDataSetCommand extends $Command<GenerateDataSetCommandInput, GenerateDataSetCommandOutput, MarketplaceCommerceAnalyticsClientResolvedConfig> {
    readonly input: GenerateDataSetCommandInput;
    constructor(input: GenerateDataSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceCommerceAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateDataSetCommandInput, GenerateDataSetCommandOutput>;
    private serialize;
    private deserialize;
}
