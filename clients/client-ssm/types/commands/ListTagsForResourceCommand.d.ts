import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListTagsForResourceRequest, ListTagsForResourceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsForResourceCommandInput = ListTagsForResourceRequest;
export declare type ListTagsForResourceCommandOutput = ListTagsForResourceResult & __MetadataBearer;
export declare class ListTagsForResourceCommand extends $Command<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListTagsForResourceCommandInput;
    constructor(input: ListTagsForResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
