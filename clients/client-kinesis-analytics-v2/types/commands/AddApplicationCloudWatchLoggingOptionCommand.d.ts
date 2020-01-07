import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { AddApplicationCloudWatchLoggingOptionRequest, AddApplicationCloudWatchLoggingOptionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddApplicationCloudWatchLoggingOptionCommandInput = AddApplicationCloudWatchLoggingOptionRequest;
export declare type AddApplicationCloudWatchLoggingOptionCommandOutput = AddApplicationCloudWatchLoggingOptionResponse & __MetadataBearer;
export declare class AddApplicationCloudWatchLoggingOptionCommand extends $Command<AddApplicationCloudWatchLoggingOptionCommandInput, AddApplicationCloudWatchLoggingOptionCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: AddApplicationCloudWatchLoggingOptionCommandInput;
    constructor(input: AddApplicationCloudWatchLoggingOptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddApplicationCloudWatchLoggingOptionCommandInput, AddApplicationCloudWatchLoggingOptionCommandOutput>;
    private serialize;
    private deserialize;
}
