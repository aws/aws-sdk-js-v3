import { MarketplaceMeteringClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceMeteringClient";
import { MeterUsageRequest, MeterUsageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MeterUsageCommandInput = MeterUsageRequest;
export declare type MeterUsageCommandOutput = MeterUsageResult & __MetadataBearer;
export declare class MeterUsageCommand extends $Command<MeterUsageCommandInput, MeterUsageCommandOutput, MarketplaceMeteringClientResolvedConfig> {
    readonly input: MeterUsageCommandInput;
    constructor(input: MeterUsageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceMeteringClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MeterUsageCommandInput, MeterUsageCommandOutput>;
    private serialize;
    private deserialize;
}
