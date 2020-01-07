import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { GetResourcesInput, GetResourcesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetResourcesCommandInput = GetResourcesInput;
export declare type GetResourcesCommandOutput = GetResourcesOutput & __MetadataBearer;
export declare class GetResourcesCommand extends $Command<GetResourcesCommandInput, GetResourcesCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: GetResourcesCommandInput;
    constructor(input: GetResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourcesCommandInput, GetResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
