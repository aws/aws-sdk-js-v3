import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { MergeShardsInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MergeShardsCommandInput = MergeShardsInput;
export declare type MergeShardsCommandOutput = __MetadataBearer;
export declare class MergeShardsCommand extends $Command<MergeShardsCommandInput, MergeShardsCommandOutput, KinesisClientResolvedConfig> {
    readonly input: MergeShardsCommandInput;
    constructor(input: MergeShardsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergeShardsCommandInput, MergeShardsCommandOutput>;
    private serialize;
    private deserialize;
}
