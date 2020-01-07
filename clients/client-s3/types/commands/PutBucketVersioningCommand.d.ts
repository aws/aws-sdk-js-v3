import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketVersioningRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketVersioningCommandInput = PutBucketVersioningRequest;
export declare type PutBucketVersioningCommandOutput = __MetadataBearer;
export declare class PutBucketVersioningCommand extends $Command<PutBucketVersioningCommandInput, PutBucketVersioningCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketVersioningCommandInput;
    constructor(input: PutBucketVersioningCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketVersioningCommandInput, PutBucketVersioningCommandOutput>;
    private serialize;
    private deserialize;
}
