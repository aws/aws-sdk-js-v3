import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ConfigurationSettingsValidationMessages, ValidateConfigurationSettingsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ValidateConfigurationSettingsCommandInput = ValidateConfigurationSettingsMessage;
export declare type ValidateConfigurationSettingsCommandOutput = ConfigurationSettingsValidationMessages & __MetadataBearer;
export declare class ValidateConfigurationSettingsCommand extends $Command<ValidateConfigurationSettingsCommandInput, ValidateConfigurationSettingsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: ValidateConfigurationSettingsCommandInput;
    constructor(input: ValidateConfigurationSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ValidateConfigurationSettingsCommandInput, ValidateConfigurationSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
