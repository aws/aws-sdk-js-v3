import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsDescription, UpdateConfigurationTemplateMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConfigurationTemplateCommandInput = UpdateConfigurationTemplateMessage;
export declare type UpdateConfigurationTemplateCommandOutput = ConfigurationSettingsDescription & __MetadataBearer;
export declare class UpdateConfigurationTemplateCommand extends $Command<UpdateConfigurationTemplateCommandInput, UpdateConfigurationTemplateCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: UpdateConfigurationTemplateCommandInput;
    constructor(input: UpdateConfigurationTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConfigurationTemplateCommandInput, UpdateConfigurationTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
