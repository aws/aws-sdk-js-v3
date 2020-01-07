import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketEncryptionOutput, GetBucketEncryptionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketEncryptionCommandInput = GetBucketEncryptionRequest;
export declare type GetBucketEncryptionCommandOutput = GetBucketEncryptionOutput & __MetadataBearer;
export declare class GetBucketEncryptionCommand extends $Command<GetBucketEncryptionCommandInput, GetBucketEncryptionCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketEncryptionCommandInput;
    constructor(input: GetBucketEncryptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketEncryptionCommandInput, GetBucketEncryptionCommandOutput>;
    private serialize;
    private deserialize;
}
