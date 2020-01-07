import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketLifecycleConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketLifecycleConfigurationCommandInput = PutBucketLifecycleConfigurationRequest;
export declare type PutBucketLifecycleConfigurationCommandOutput = __MetadataBearer;
export declare class PutBucketLifecycleConfigurationCommand extends $Command<PutBucketLifecycleConfigurationCommandInput, PutBucketLifecycleConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketLifecycleConfigurationCommandInput;
    constructor(input: PutBucketLifecycleConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketLifecycleConfigurationCommandInput, PutBucketLifecycleConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
