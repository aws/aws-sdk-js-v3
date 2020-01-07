import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { TagProjectRequest, TagProjectResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TagProjectCommandInput = TagProjectRequest;
export declare type TagProjectCommandOutput = TagProjectResult & __MetadataBearer;
export declare class TagProjectCommand extends $Command<TagProjectCommandInput, TagProjectCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: TagProjectCommandInput;
    constructor(input: TagProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagProjectCommandInput, TagProjectCommandOutput>;
    private serialize;
    private deserialize;
}
