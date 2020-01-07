import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketLifecycleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBucketLifecycleCommandInput = DeleteBucketLifecycleRequest;
export declare type DeleteBucketLifecycleCommandOutput = __MetadataBearer;
export declare class DeleteBucketLifecycleCommand extends $Command<DeleteBucketLifecycleCommandInput, DeleteBucketLifecycleCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketLifecycleCommandInput;
    constructor(input: DeleteBucketLifecycleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketLifecycleCommandInput, DeleteBucketLifecycleCommandOutput>;
    private serialize;
    private deserialize;
}
