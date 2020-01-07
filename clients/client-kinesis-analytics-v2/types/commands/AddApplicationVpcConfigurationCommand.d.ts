import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { AddApplicationVpcConfigurationRequest, AddApplicationVpcConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddApplicationVpcConfigurationCommandInput = AddApplicationVpcConfigurationRequest;
export declare type AddApplicationVpcConfigurationCommandOutput = AddApplicationVpcConfigurationResponse & __MetadataBearer;
export declare class AddApplicationVpcConfigurationCommand extends $Command<AddApplicationVpcConfigurationCommandInput, AddApplicationVpcConfigurationCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: AddApplicationVpcConfigurationCommandInput;
    constructor(input: AddApplicationVpcConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddApplicationVpcConfigurationCommandInput, AddApplicationVpcConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
