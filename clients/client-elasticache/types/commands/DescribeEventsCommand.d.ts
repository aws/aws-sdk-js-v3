import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeEventsMessage, EventsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventsCommandInput = DescribeEventsMessage;
export declare type DescribeEventsCommandOutput = EventsMessage & __MetadataBearer;
export declare class DescribeEventsCommand extends $Command<DescribeEventsCommandInput, DescribeEventsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeEventsCommandInput;
    constructor(input: DescribeEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventsCommandInput, DescribeEventsCommandOutput>;
    private serialize;
    private deserialize;
}
