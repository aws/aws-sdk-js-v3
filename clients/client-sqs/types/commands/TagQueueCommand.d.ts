import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { TagQueueRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TagQueueCommandInput = TagQueueRequest;
export declare type TagQueueCommandOutput = __MetadataBearer;
export declare class TagQueueCommand extends $Command<TagQueueCommandInput, TagQueueCommandOutput, SQSClientResolvedConfig> {
    readonly input: TagQueueCommandInput;
    constructor(input: TagQueueCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagQueueCommandInput, TagQueueCommandOutput>;
    private serialize;
    private deserialize;
}
