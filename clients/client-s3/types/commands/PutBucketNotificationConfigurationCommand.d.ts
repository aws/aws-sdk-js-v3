import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketNotificationConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketNotificationConfigurationCommandInput = PutBucketNotificationConfigurationRequest;
export declare type PutBucketNotificationConfigurationCommandOutput = __MetadataBearer;
export declare class PutBucketNotificationConfigurationCommand extends $Command<PutBucketNotificationConfigurationCommandInput, PutBucketNotificationConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketNotificationConfigurationCommandInput;
    constructor(input: PutBucketNotificationConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketNotificationConfigurationCommandInput, PutBucketNotificationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
