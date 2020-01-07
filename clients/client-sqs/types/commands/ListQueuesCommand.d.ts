import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { ListQueuesRequest, ListQueuesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListQueuesCommandInput = ListQueuesRequest;
export declare type ListQueuesCommandOutput = ListQueuesResult & __MetadataBearer;
export declare class ListQueuesCommand extends $Command<ListQueuesCommandInput, ListQueuesCommandOutput, SQSClientResolvedConfig> {
    readonly input: ListQueuesCommandInput;
    constructor(input: ListQueuesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListQueuesCommandInput, ListQueuesCommandOutput>;
    private serialize;
    private deserialize;
}
