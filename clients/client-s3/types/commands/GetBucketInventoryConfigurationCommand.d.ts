import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketInventoryConfigurationOutput, GetBucketInventoryConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketInventoryConfigurationCommandInput = GetBucketInventoryConfigurationRequest;
export declare type GetBucketInventoryConfigurationCommandOutput = GetBucketInventoryConfigurationOutput & __MetadataBearer;
export declare class GetBucketInventoryConfigurationCommand extends $Command<GetBucketInventoryConfigurationCommandInput, GetBucketInventoryConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketInventoryConfigurationCommandInput;
    constructor(input: GetBucketInventoryConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketInventoryConfigurationCommandInput, GetBucketInventoryConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
