import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { SplitShardInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SplitShardCommandInput = SplitShardInput;
export declare type SplitShardCommandOutput = __MetadataBearer;
export declare class SplitShardCommand extends $Command<SplitShardCommandInput, SplitShardCommandOutput, KinesisClientResolvedConfig> {
    readonly input: SplitShardCommandInput;
    constructor(input: SplitShardCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SplitShardCommandInput, SplitShardCommandOutput>;
    private serialize;
    private deserialize;
}
