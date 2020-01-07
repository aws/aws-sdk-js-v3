import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketReplicationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBucketReplicationCommandInput = DeleteBucketReplicationRequest;
export declare type DeleteBucketReplicationCommandOutput = __MetadataBearer;
export declare class DeleteBucketReplicationCommand extends $Command<DeleteBucketReplicationCommandInput, DeleteBucketReplicationCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketReplicationCommandInput;
    constructor(input: DeleteBucketReplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketReplicationCommandInput, DeleteBucketReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
