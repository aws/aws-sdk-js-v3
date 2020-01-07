import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { AddTagsToResourceMessage, TagListMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddTagsToResourceCommandInput = AddTagsToResourceMessage;
export declare type AddTagsToResourceCommandOutput = TagListMessage & __MetadataBearer;
export declare class AddTagsToResourceCommand extends $Command<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: AddTagsToResourceCommandInput;
    constructor(input: AddTagsToResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput>;
    private serialize;
    private deserialize;
}
