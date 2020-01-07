import { MarketplaceMeteringClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceMeteringClient";
import { BatchMeterUsageRequest, BatchMeterUsageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchMeterUsageCommandInput = BatchMeterUsageRequest;
export declare type BatchMeterUsageCommandOutput = BatchMeterUsageResult & __MetadataBearer;
export declare class BatchMeterUsageCommand extends $Command<BatchMeterUsageCommandInput, BatchMeterUsageCommandOutput, MarketplaceMeteringClientResolvedConfig> {
    readonly input: BatchMeterUsageCommandInput;
    constructor(input: BatchMeterUsageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceMeteringClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchMeterUsageCommandInput, BatchMeterUsageCommandOutput>;
    private serialize;
    private deserialize;
}
