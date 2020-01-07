import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { TagResourceRequest, TagResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TagResourceCommandInput = TagResourceRequest;
export declare type TagResourceCommandOutput = TagResourceResponse & __MetadataBearer;
export declare class TagResourceCommand extends $Command<TagResourceCommandInput, TagResourceCommandOutput, GlueClientResolvedConfig> {
    readonly input: TagResourceCommandInput;
    constructor(input: TagResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagResourceCommandInput, TagResourceCommandOutput>;
    private serialize;
    private deserialize;
}
