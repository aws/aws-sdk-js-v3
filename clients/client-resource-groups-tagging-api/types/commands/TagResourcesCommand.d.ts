import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { TagResourcesInput, TagResourcesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TagResourcesCommandInput = TagResourcesInput;
export declare type TagResourcesCommandOutput = TagResourcesOutput & __MetadataBearer;
export declare class TagResourcesCommand extends $Command<TagResourcesCommandInput, TagResourcesCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: TagResourcesCommandInput;
    constructor(input: TagResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagResourcesCommandInput, TagResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
