import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigurationAggregatorsRequest, DescribeConfigurationAggregatorsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConfigurationAggregatorsCommandInput = DescribeConfigurationAggregatorsRequest;
export declare type DescribeConfigurationAggregatorsCommandOutput = DescribeConfigurationAggregatorsResponse & __MetadataBearer;
export declare class DescribeConfigurationAggregatorsCommand extends $Command<DescribeConfigurationAggregatorsCommandInput, DescribeConfigurationAggregatorsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConfigurationAggregatorsCommandInput;
    constructor(input: DescribeConfigurationAggregatorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationAggregatorsCommandInput, DescribeConfigurationAggregatorsCommandOutput>;
    private serialize;
    private deserialize;
}
