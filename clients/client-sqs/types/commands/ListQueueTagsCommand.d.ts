import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { ListQueueTagsRequest, ListQueueTagsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListQueueTagsCommandInput = ListQueueTagsRequest;
export declare type ListQueueTagsCommandOutput = ListQueueTagsResult & __MetadataBearer;
export declare class ListQueueTagsCommand extends $Command<ListQueueTagsCommandInput, ListQueueTagsCommandOutput, SQSClientResolvedConfig> {
    readonly input: ListQueueTagsCommandInput;
    constructor(input: ListQueueTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListQueueTagsCommandInput, ListQueueTagsCommandOutput>;
    private serialize;
    private deserialize;
}
