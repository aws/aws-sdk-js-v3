import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventsRequest, DescribeEventsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventsCommandInput = DescribeEventsRequest;
export declare type DescribeEventsCommandOutput = DescribeEventsResponse & __MetadataBearer;
export declare class DescribeEventsCommand extends $Command<DescribeEventsCommandInput, DescribeEventsCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeEventsCommandInput;
    constructor(input: DescribeEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventsCommandInput, DescribeEventsCommandOutput>;
    private serialize;
    private deserialize;
}
