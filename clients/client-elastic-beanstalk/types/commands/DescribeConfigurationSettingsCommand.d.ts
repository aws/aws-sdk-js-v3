import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsDescriptions, DescribeConfigurationSettingsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConfigurationSettingsCommandInput = DescribeConfigurationSettingsMessage;
export declare type DescribeConfigurationSettingsCommandOutput = ConfigurationSettingsDescriptions & __MetadataBearer;
export declare class DescribeConfigurationSettingsCommand extends $Command<DescribeConfigurationSettingsCommandInput, DescribeConfigurationSettingsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DescribeConfigurationSettingsCommandInput;
    constructor(input: DescribeConfigurationSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationSettingsCommandInput, DescribeConfigurationSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
