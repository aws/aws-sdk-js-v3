import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { ListTagsForResourceInput, ListTagsForResourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsForResourceCommandInput = ListTagsForResourceInput;
export declare type ListTagsForResourceCommandOutput = ListTagsForResourceOutput & __MetadataBearer;
export declare class ListTagsForResourceCommand extends $Command<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: ListTagsForResourceCommandInput;
    constructor(input: ListTagsForResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
