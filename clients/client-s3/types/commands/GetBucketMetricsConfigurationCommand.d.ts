import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketMetricsConfigurationOutput, GetBucketMetricsConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketMetricsConfigurationCommandInput = GetBucketMetricsConfigurationRequest;
export declare type GetBucketMetricsConfigurationCommandOutput = GetBucketMetricsConfigurationOutput & __MetadataBearer;
export declare class GetBucketMetricsConfigurationCommand extends $Command<GetBucketMetricsConfigurationCommandInput, GetBucketMetricsConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketMetricsConfigurationCommandInput;
    constructor(input: GetBucketMetricsConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketMetricsConfigurationCommandInput, GetBucketMetricsConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
