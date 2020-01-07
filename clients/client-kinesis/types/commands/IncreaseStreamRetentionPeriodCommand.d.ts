import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { IncreaseStreamRetentionPeriodInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type IncreaseStreamRetentionPeriodCommandInput = IncreaseStreamRetentionPeriodInput;
export declare type IncreaseStreamRetentionPeriodCommandOutput = __MetadataBearer;
export declare class IncreaseStreamRetentionPeriodCommand extends $Command<IncreaseStreamRetentionPeriodCommandInput, IncreaseStreamRetentionPeriodCommandOutput, KinesisClientResolvedConfig> {
    readonly input: IncreaseStreamRetentionPeriodCommandInput;
    constructor(input: IncreaseStreamRetentionPeriodCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IncreaseStreamRetentionPeriodCommandInput, IncreaseStreamRetentionPeriodCommandOutput>;
    private serialize;
    private deserialize;
}
