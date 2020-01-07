import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeBandwidthRateLimitInput, DescribeBandwidthRateLimitOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeBandwidthRateLimitCommandInput = DescribeBandwidthRateLimitInput;
export declare type DescribeBandwidthRateLimitCommandOutput = DescribeBandwidthRateLimitOutput & __MetadataBearer;
export declare class DescribeBandwidthRateLimitCommand extends $Command<DescribeBandwidthRateLimitCommandInput, DescribeBandwidthRateLimitCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeBandwidthRateLimitCommandInput;
    constructor(input: DescribeBandwidthRateLimitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBandwidthRateLimitCommandInput, DescribeBandwidthRateLimitCommandOutput>;
    private serialize;
    private deserialize;
}
