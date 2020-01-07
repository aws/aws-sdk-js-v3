import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DeleteApplicationCloudWatchLoggingOptionRequest, DeleteApplicationCloudWatchLoggingOptionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApplicationCloudWatchLoggingOptionCommandInput = DeleteApplicationCloudWatchLoggingOptionRequest;
export declare type DeleteApplicationCloudWatchLoggingOptionCommandOutput = DeleteApplicationCloudWatchLoggingOptionResponse & __MetadataBearer;
export declare class DeleteApplicationCloudWatchLoggingOptionCommand extends $Command<DeleteApplicationCloudWatchLoggingOptionCommandInput, DeleteApplicationCloudWatchLoggingOptionCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DeleteApplicationCloudWatchLoggingOptionCommandInput;
    constructor(input: DeleteApplicationCloudWatchLoggingOptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationCloudWatchLoggingOptionCommandInput, DeleteApplicationCloudWatchLoggingOptionCommandOutput>;
    private serialize;
    private deserialize;
}
