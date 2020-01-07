import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketAnalyticsConfigurationOutput, GetBucketAnalyticsConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketAnalyticsConfigurationCommandInput = GetBucketAnalyticsConfigurationRequest;
export declare type GetBucketAnalyticsConfigurationCommandOutput = GetBucketAnalyticsConfigurationOutput & __MetadataBearer;
export declare class GetBucketAnalyticsConfigurationCommand extends $Command<GetBucketAnalyticsConfigurationCommandInput, GetBucketAnalyticsConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketAnalyticsConfigurationCommandInput;
    constructor(input: GetBucketAnalyticsConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketAnalyticsConfigurationCommandInput, GetBucketAnalyticsConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
