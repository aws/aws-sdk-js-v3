import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBucketCommandInput = DeleteBucketRequest;
export declare type DeleteBucketCommandOutput = __MetadataBearer;
export declare class DeleteBucketCommand extends $Command<DeleteBucketCommandInput, DeleteBucketCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketCommandInput;
    constructor(input: DeleteBucketCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketCommandInput, DeleteBucketCommandOutput>;
    private serialize;
    private deserialize;
}
