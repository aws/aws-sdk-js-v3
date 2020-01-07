import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { ListTagsForProjectRequest, ListTagsForProjectResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsForProjectCommandInput = ListTagsForProjectRequest;
export declare type ListTagsForProjectCommandOutput = ListTagsForProjectResult & __MetadataBearer;
export declare class ListTagsForProjectCommand extends $Command<ListTagsForProjectCommandInput, ListTagsForProjectCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: ListTagsForProjectCommandInput;
    constructor(input: ListTagsForProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForProjectCommandInput, ListTagsForProjectCommandOutput>;
    private serialize;
    private deserialize;
}
