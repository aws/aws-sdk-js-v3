import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketReplicationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketReplicationCommandInput = PutBucketReplicationRequest;
export declare type PutBucketReplicationCommandOutput = __MetadataBearer;
export declare class PutBucketReplicationCommand extends $Command<PutBucketReplicationCommandInput, PutBucketReplicationCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketReplicationCommandInput;
    constructor(input: PutBucketReplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketReplicationCommandInput, PutBucketReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
