import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DescribeEventSourceRequest, DescribeEventSourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventSourceCommandInput = DescribeEventSourceRequest;
export declare type DescribeEventSourceCommandOutput = DescribeEventSourceResponse & __MetadataBearer;
export declare class DescribeEventSourceCommand extends $Command<DescribeEventSourceCommandInput, DescribeEventSourceCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: DescribeEventSourceCommandInput;
    constructor(input: DescribeEventSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventSourceCommandInput, DescribeEventSourceCommandOutput>;
    private serialize;
    private deserialize;
}
