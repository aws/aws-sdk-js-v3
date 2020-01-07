import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationOptionsDescription, DescribeConfigurationOptionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConfigurationOptionsCommandInput = DescribeConfigurationOptionsMessage;
export declare type DescribeConfigurationOptionsCommandOutput = ConfigurationOptionsDescription & __MetadataBearer;
export declare class DescribeConfigurationOptionsCommand extends $Command<DescribeConfigurationOptionsCommandInput, DescribeConfigurationOptionsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeConfigurationOptionsCommandInput;
    constructor(input: DescribeConfigurationOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationOptionsCommandInput, DescribeConfigurationOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
