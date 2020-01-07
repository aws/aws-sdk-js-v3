import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { TagLogGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TagLogGroupCommandInput = TagLogGroupRequest;
export declare type TagLogGroupCommandOutput = __MetadataBearer;
export declare class TagLogGroupCommand extends $Command<TagLogGroupCommandInput, TagLogGroupCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: TagLogGroupCommandInput;
    constructor(input: TagLogGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagLogGroupCommandInput, TagLogGroupCommandOutput>;
    private serialize;
    private deserialize;
}
