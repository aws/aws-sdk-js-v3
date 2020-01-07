import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigurationAggregatorSourcesStatusRequest, DescribeConfigurationAggregatorSourcesStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConfigurationAggregatorSourcesStatusCommandInput = DescribeConfigurationAggregatorSourcesStatusRequest;
export declare type DescribeConfigurationAggregatorSourcesStatusCommandOutput = DescribeConfigurationAggregatorSourcesStatusResponse & __MetadataBearer;
export declare class DescribeConfigurationAggregatorSourcesStatusCommand extends $Command<DescribeConfigurationAggregatorSourcesStatusCommandInput, DescribeConfigurationAggregatorSourcesStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConfigurationAggregatorSourcesStatusCommandInput;
    constructor(input: DescribeConfigurationAggregatorSourcesStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationAggregatorSourcesStatusCommandInput, DescribeConfigurationAggregatorSourcesStatusCommandOutput>;
    private serialize;
    private deserialize;
}
