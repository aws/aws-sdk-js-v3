import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketInventoryConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketInventoryConfigurationCommandInput = PutBucketInventoryConfigurationRequest;
export declare type PutBucketInventoryConfigurationCommandOutput = __MetadataBearer;
export declare class PutBucketInventoryConfigurationCommand extends $Command<PutBucketInventoryConfigurationCommandInput, PutBucketInventoryConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketInventoryConfigurationCommandInput;
    constructor(input: PutBucketInventoryConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketInventoryConfigurationCommandInput, PutBucketInventoryConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
