import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketMetricsConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketMetricsConfigurationCommandInput = PutBucketMetricsConfigurationRequest;
export declare type PutBucketMetricsConfigurationCommandOutput = __MetadataBearer;
export declare class PutBucketMetricsConfigurationCommand extends $Command<PutBucketMetricsConfigurationCommandInput, PutBucketMetricsConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketMetricsConfigurationCommandInput;
    constructor(input: PutBucketMetricsConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketMetricsConfigurationCommandInput, PutBucketMetricsConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
