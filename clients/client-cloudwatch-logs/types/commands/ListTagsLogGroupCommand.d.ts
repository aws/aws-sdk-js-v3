import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { ListTagsLogGroupRequest, ListTagsLogGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsLogGroupCommandInput = ListTagsLogGroupRequest;
export declare type ListTagsLogGroupCommandOutput = ListTagsLogGroupResponse & __MetadataBearer;
export declare class ListTagsLogGroupCommand extends $Command<ListTagsLogGroupCommandInput, ListTagsLogGroupCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: ListTagsLogGroupCommandInput;
    constructor(input: ListTagsLogGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsLogGroupCommandInput, ListTagsLogGroupCommandOutput>;
    private serialize;
    private deserialize;
}
