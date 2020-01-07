import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { ListDeadLetterSourceQueuesRequest, ListDeadLetterSourceQueuesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeadLetterSourceQueuesCommandInput = ListDeadLetterSourceQueuesRequest;
export declare type ListDeadLetterSourceQueuesCommandOutput = ListDeadLetterSourceQueuesResult & __MetadataBearer;
export declare class ListDeadLetterSourceQueuesCommand extends $Command<ListDeadLetterSourceQueuesCommandInput, ListDeadLetterSourceQueuesCommandOutput, SQSClientResolvedConfig> {
    readonly input: ListDeadLetterSourceQueuesCommandInput;
    constructor(input: ListDeadLetterSourceQueuesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeadLetterSourceQueuesCommandInput, ListDeadLetterSourceQueuesCommandOutput>;
    private serialize;
    private deserialize;
}
