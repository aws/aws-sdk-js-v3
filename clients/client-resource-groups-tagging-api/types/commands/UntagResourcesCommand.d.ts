import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { UntagResourcesInput, UntagResourcesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UntagResourcesCommandInput = UntagResourcesInput;
export declare type UntagResourcesCommandOutput = UntagResourcesOutput & __MetadataBearer;
export declare class UntagResourcesCommand extends $Command<UntagResourcesCommandInput, UntagResourcesCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: UntagResourcesCommandInput;
    constructor(input: UntagResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagResourcesCommandInput, UntagResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
