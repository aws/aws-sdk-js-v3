import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketTaggingRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketTaggingCommandInput = PutBucketTaggingRequest;
export declare type PutBucketTaggingCommandOutput = __MetadataBearer;
export declare class PutBucketTaggingCommand extends $Command<PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketTaggingCommandInput;
    constructor(input: PutBucketTaggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
