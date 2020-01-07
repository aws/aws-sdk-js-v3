import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DecreaseStreamRetentionPeriodInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DecreaseStreamRetentionPeriodCommandInput = DecreaseStreamRetentionPeriodInput;
export declare type DecreaseStreamRetentionPeriodCommandOutput = __MetadataBearer;
export declare class DecreaseStreamRetentionPeriodCommand extends $Command<DecreaseStreamRetentionPeriodCommandInput, DecreaseStreamRetentionPeriodCommandOutput, KinesisClientResolvedConfig> {
    readonly input: DecreaseStreamRetentionPeriodCommandInput;
    constructor(input: DecreaseStreamRetentionPeriodCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DecreaseStreamRetentionPeriodCommandInput, DecreaseStreamRetentionPeriodCommandOutput>;
    private serialize;
    private deserialize;
}
