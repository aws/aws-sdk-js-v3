import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketReplicationOutput, GetBucketReplicationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketReplicationCommandInput = GetBucketReplicationRequest;
export declare type GetBucketReplicationCommandOutput = GetBucketReplicationOutput & __MetadataBearer;
export declare class GetBucketReplicationCommand extends $Command<GetBucketReplicationCommandInput, GetBucketReplicationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketReplicationCommandInput;
    constructor(input: GetBucketReplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketReplicationCommandInput, GetBucketReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
