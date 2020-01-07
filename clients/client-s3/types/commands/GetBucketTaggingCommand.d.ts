import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketTaggingOutput, GetBucketTaggingRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketTaggingCommandInput = GetBucketTaggingRequest;
export declare type GetBucketTaggingCommandOutput = GetBucketTaggingOutput & __MetadataBearer;
export declare class GetBucketTaggingCommand extends $Command<GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketTaggingCommandInput;
    constructor(input: GetBucketTaggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
