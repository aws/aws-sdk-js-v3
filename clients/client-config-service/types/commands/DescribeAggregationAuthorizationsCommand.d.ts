import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeAggregationAuthorizationsRequest, DescribeAggregationAuthorizationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAggregationAuthorizationsCommandInput = DescribeAggregationAuthorizationsRequest;
export declare type DescribeAggregationAuthorizationsCommandOutput = DescribeAggregationAuthorizationsResponse & __MetadataBearer;
export declare class DescribeAggregationAuthorizationsCommand extends $Command<DescribeAggregationAuthorizationsCommandInput, DescribeAggregationAuthorizationsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeAggregationAuthorizationsCommandInput;
    constructor(input: DescribeAggregationAuthorizationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAggregationAuthorizationsCommandInput, DescribeAggregationAuthorizationsCommandOutput>;
    private serialize;
    private deserialize;
}
