import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketTaggingRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBucketTaggingCommandInput = DeleteBucketTaggingRequest;
export declare type DeleteBucketTaggingCommandOutput = __MetadataBearer;
export declare class DeleteBucketTaggingCommand extends $Command<DeleteBucketTaggingCommandInput, DeleteBucketTaggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketTaggingCommandInput;
    constructor(input: DeleteBucketTaggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketTaggingCommandInput, DeleteBucketTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
