import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { ListShardsInput, ListShardsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListShardsCommandInput = ListShardsInput;
export declare type ListShardsCommandOutput = ListShardsOutput & __MetadataBearer;
export declare class ListShardsCommand extends $Command<ListShardsCommandInput, ListShardsCommandOutput, KinesisClientResolvedConfig> {
    readonly input: ListShardsCommandInput;
    constructor(input: ListShardsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListShardsCommandInput, ListShardsCommandOutput>;
    private serialize;
    private deserialize;
}
