import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketAccelerateConfigurationOutput, GetBucketAccelerateConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketAccelerateConfigurationCommandInput = GetBucketAccelerateConfigurationRequest;
export declare type GetBucketAccelerateConfigurationCommandOutput = GetBucketAccelerateConfigurationOutput & __MetadataBearer;
export declare class GetBucketAccelerateConfigurationCommand extends $Command<GetBucketAccelerateConfigurationCommandInput, GetBucketAccelerateConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketAccelerateConfigurationCommandInput;
    constructor(input: GetBucketAccelerateConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketAccelerateConfigurationCommandInput, GetBucketAccelerateConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
