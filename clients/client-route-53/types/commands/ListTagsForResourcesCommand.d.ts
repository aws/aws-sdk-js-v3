import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTagsForResourcesRequest, ListTagsForResourcesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsForResourcesCommandInput = ListTagsForResourcesRequest;
export declare type ListTagsForResourcesCommandOutput = ListTagsForResourcesResponse & __MetadataBearer;
export declare class ListTagsForResourcesCommand extends $Command<ListTagsForResourcesCommandInput, ListTagsForResourcesCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListTagsForResourcesCommandInput;
    constructor(input: ListTagsForResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForResourcesCommandInput, ListTagsForResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
