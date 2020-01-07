import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketAnalyticsConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBucketAnalyticsConfigurationCommandInput = DeleteBucketAnalyticsConfigurationRequest;
export declare type DeleteBucketAnalyticsConfigurationCommandOutput = __MetadataBearer;
export declare class DeleteBucketAnalyticsConfigurationCommand extends $Command<DeleteBucketAnalyticsConfigurationCommandInput, DeleteBucketAnalyticsConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketAnalyticsConfigurationCommandInput;
    constructor(input: DeleteBucketAnalyticsConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketAnalyticsConfigurationCommandInput, DeleteBucketAnalyticsConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
