import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { ListTagsForStreamInput, ListTagsForStreamOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsForStreamCommandInput = ListTagsForStreamInput;
export declare type ListTagsForStreamCommandOutput = ListTagsForStreamOutput & __MetadataBearer;
export declare class ListTagsForStreamCommand extends $Command<ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput, KinesisClientResolvedConfig> {
    readonly input: ListTagsForStreamCommandInput;
    constructor(input: ListTagsForStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput>;
    private serialize;
    private deserialize;
}
