import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListBucketAnalyticsConfigurationsOutput, ListBucketAnalyticsConfigurationsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBucketAnalyticsConfigurationsCommandInput = ListBucketAnalyticsConfigurationsRequest;
export declare type ListBucketAnalyticsConfigurationsCommandOutput = ListBucketAnalyticsConfigurationsOutput & __MetadataBearer;
export declare class ListBucketAnalyticsConfigurationsCommand extends $Command<ListBucketAnalyticsConfigurationsCommandInput, ListBucketAnalyticsConfigurationsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListBucketAnalyticsConfigurationsCommandInput;
    constructor(input: ListBucketAnalyticsConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBucketAnalyticsConfigurationsCommandInput, ListBucketAnalyticsConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
