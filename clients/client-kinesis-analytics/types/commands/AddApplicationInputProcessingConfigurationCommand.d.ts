import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { AddApplicationInputProcessingConfigurationRequest, AddApplicationInputProcessingConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddApplicationInputProcessingConfigurationCommandInput = AddApplicationInputProcessingConfigurationRequest;
export declare type AddApplicationInputProcessingConfigurationCommandOutput = AddApplicationInputProcessingConfigurationResponse & __MetadataBearer;
export declare class AddApplicationInputProcessingConfigurationCommand extends $Command<AddApplicationInputProcessingConfigurationCommandInput, AddApplicationInputProcessingConfigurationCommandOutput, KinesisAnalyticsClientResolvedConfig> {
    readonly input: AddApplicationInputProcessingConfigurationCommandInput;
    constructor(input: AddApplicationInputProcessingConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddApplicationInputProcessingConfigurationCommandInput, AddApplicationInputProcessingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
