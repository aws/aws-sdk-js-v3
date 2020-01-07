import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListBucketMetricsConfigurationsOutput, ListBucketMetricsConfigurationsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBucketMetricsConfigurationsCommandInput = ListBucketMetricsConfigurationsRequest;
export declare type ListBucketMetricsConfigurationsCommandOutput = ListBucketMetricsConfigurationsOutput & __MetadataBearer;
export declare class ListBucketMetricsConfigurationsCommand extends $Command<ListBucketMetricsConfigurationsCommandInput, ListBucketMetricsConfigurationsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListBucketMetricsConfigurationsCommandInput;
    constructor(input: ListBucketMetricsConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBucketMetricsConfigurationsCommandInput, ListBucketMetricsConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
