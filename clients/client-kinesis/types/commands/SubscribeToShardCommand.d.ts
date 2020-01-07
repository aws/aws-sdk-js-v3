import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { SubscribeToShardInput, SubscribeToShardOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SubscribeToShardCommandInput = SubscribeToShardInput;
export declare type SubscribeToShardCommandOutput = SubscribeToShardOutput & __MetadataBearer;
export declare class SubscribeToShardCommand extends $Command<SubscribeToShardCommandInput, SubscribeToShardCommandOutput, KinesisClientResolvedConfig> {
    readonly input: SubscribeToShardCommandInput;
    constructor(input: SubscribeToShardCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SubscribeToShardCommandInput, SubscribeToShardCommandOutput>;
    private serialize;
    private deserialize;
}
