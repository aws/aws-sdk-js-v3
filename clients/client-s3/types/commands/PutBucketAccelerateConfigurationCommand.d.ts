import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketAccelerateConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketAccelerateConfigurationCommandInput = PutBucketAccelerateConfigurationRequest;
export declare type PutBucketAccelerateConfigurationCommandOutput = __MetadataBearer;
export declare class PutBucketAccelerateConfigurationCommand extends $Command<PutBucketAccelerateConfigurationCommandInput, PutBucketAccelerateConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketAccelerateConfigurationCommandInput;
    constructor(input: PutBucketAccelerateConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketAccelerateConfigurationCommandInput, PutBucketAccelerateConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
