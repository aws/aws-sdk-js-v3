import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventAggregatesRequest, DescribeEventAggregatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventAggregatesCommandInput = DescribeEventAggregatesRequest;
export declare type DescribeEventAggregatesCommandOutput = DescribeEventAggregatesResponse & __MetadataBearer;
export declare class DescribeEventAggregatesCommand extends $Command<DescribeEventAggregatesCommandInput, DescribeEventAggregatesCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeEventAggregatesCommandInput;
    constructor(input: DescribeEventAggregatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventAggregatesCommandInput, DescribeEventAggregatesCommandOutput>;
    private serialize;
    private deserialize;
}
