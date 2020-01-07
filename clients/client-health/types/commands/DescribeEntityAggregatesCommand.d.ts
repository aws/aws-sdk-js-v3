import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEntityAggregatesRequest, DescribeEntityAggregatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEntityAggregatesCommandInput = DescribeEntityAggregatesRequest;
export declare type DescribeEntityAggregatesCommandOutput = DescribeEntityAggregatesResponse & __MetadataBearer;
export declare class DescribeEntityAggregatesCommand extends $Command<DescribeEntityAggregatesCommandInput, DescribeEntityAggregatesCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeEntityAggregatesCommandInput;
    constructor(input: DescribeEntityAggregatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEntityAggregatesCommandInput, DescribeEntityAggregatesCommandOutput>;
    private serialize;
    private deserialize;
}
