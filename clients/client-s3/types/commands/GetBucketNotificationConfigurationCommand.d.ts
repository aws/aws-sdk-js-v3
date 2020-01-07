import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketNotificationConfigurationRequest, NotificationConfiguration } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketNotificationConfigurationCommandInput = GetBucketNotificationConfigurationRequest;
export declare type GetBucketNotificationConfigurationCommandOutput = NotificationConfiguration & __MetadataBearer;
export declare class GetBucketNotificationConfigurationCommand extends $Command<GetBucketNotificationConfigurationCommandInput, GetBucketNotificationConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketNotificationConfigurationCommandInput;
    constructor(input: GetBucketNotificationConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketNotificationConfigurationCommandInput, GetBucketNotificationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
