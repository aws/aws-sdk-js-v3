import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketEncryptionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketEncryptionCommandInput = PutBucketEncryptionRequest;
export declare type PutBucketEncryptionCommandOutput = __MetadataBearer;
export declare class PutBucketEncryptionCommand extends $Command<PutBucketEncryptionCommandInput, PutBucketEncryptionCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketEncryptionCommandInput;
    constructor(input: PutBucketEncryptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketEncryptionCommandInput, PutBucketEncryptionCommandOutput>;
    private serialize;
    private deserialize;
}
