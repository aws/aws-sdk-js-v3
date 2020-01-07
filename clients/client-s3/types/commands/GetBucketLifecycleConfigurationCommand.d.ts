import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketLifecycleConfigurationOutput, GetBucketLifecycleConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketLifecycleConfigurationCommandInput = GetBucketLifecycleConfigurationRequest;
export declare type GetBucketLifecycleConfigurationCommandOutput = GetBucketLifecycleConfigurationOutput & __MetadataBearer;
export declare class GetBucketLifecycleConfigurationCommand extends $Command<GetBucketLifecycleConfigurationCommandInput, GetBucketLifecycleConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketLifecycleConfigurationCommandInput;
    constructor(input: GetBucketLifecycleConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketLifecycleConfigurationCommandInput, GetBucketLifecycleConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
