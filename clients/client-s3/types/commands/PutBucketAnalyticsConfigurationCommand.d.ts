import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketAnalyticsConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketAnalyticsConfigurationCommandInput = PutBucketAnalyticsConfigurationRequest;
export declare type PutBucketAnalyticsConfigurationCommandOutput = __MetadataBearer;
export declare class PutBucketAnalyticsConfigurationCommand extends $Command<PutBucketAnalyticsConfigurationCommandInput, PutBucketAnalyticsConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketAnalyticsConfigurationCommandInput;
    constructor(input: PutBucketAnalyticsConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketAnalyticsConfigurationCommandInput, PutBucketAnalyticsConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
