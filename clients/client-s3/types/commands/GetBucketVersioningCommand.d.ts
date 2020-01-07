import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketVersioningOutput, GetBucketVersioningRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketVersioningCommandInput = GetBucketVersioningRequest;
export declare type GetBucketVersioningCommandOutput = GetBucketVersioningOutput & __MetadataBearer;
export declare class GetBucketVersioningCommand extends $Command<GetBucketVersioningCommandInput, GetBucketVersioningCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketVersioningCommandInput;
    constructor(input: GetBucketVersioningCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketVersioningCommandInput, GetBucketVersioningCommandOutput>;
    private serialize;
    private deserialize;
}
