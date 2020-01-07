import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsDescription, CreateConfigurationTemplateMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConfigurationTemplateCommandInput = CreateConfigurationTemplateMessage;
export declare type CreateConfigurationTemplateCommandOutput = ConfigurationSettingsDescription & __MetadataBearer;
export declare class CreateConfigurationTemplateCommand extends $Command<CreateConfigurationTemplateCommandInput, CreateConfigurationTemplateCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: CreateConfigurationTemplateCommandInput;
    constructor(input: CreateConfigurationTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConfigurationTemplateCommandInput, CreateConfigurationTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
