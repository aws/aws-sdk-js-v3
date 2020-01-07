import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketMetricsConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBucketMetricsConfigurationCommandInput = DeleteBucketMetricsConfigurationRequest;
export declare type DeleteBucketMetricsConfigurationCommandOutput = __MetadataBearer;
export declare class DeleteBucketMetricsConfigurationCommand extends $Command<DeleteBucketMetricsConfigurationCommandInput, DeleteBucketMetricsConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketMetricsConfigurationCommandInput;
    constructor(input: DeleteBucketMetricsConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketMetricsConfigurationCommandInput, DeleteBucketMetricsConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
