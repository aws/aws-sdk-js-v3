import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketEncryptionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBucketEncryptionCommandInput = DeleteBucketEncryptionRequest;
export declare type DeleteBucketEncryptionCommandOutput = __MetadataBearer;
export declare class DeleteBucketEncryptionCommand extends $Command<DeleteBucketEncryptionCommandInput, DeleteBucketEncryptionCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketEncryptionCommandInput;
    constructor(input: DeleteBucketEncryptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketEncryptionCommandInput, DeleteBucketEncryptionCommandOutput>;
    private serialize;
    private deserialize;
}
