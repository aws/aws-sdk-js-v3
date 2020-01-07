import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { HeadBucketRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type HeadBucketCommandInput = HeadBucketRequest;
export declare type HeadBucketCommandOutput = __MetadataBearer;
export declare class HeadBucketCommand extends $Command<HeadBucketCommandInput, HeadBucketCommandOutput, S3ClientResolvedConfig> {
    readonly input: HeadBucketCommandInput;
    constructor(input: HeadBucketCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<HeadBucketCommandInput, HeadBucketCommandOutput>;
    private serialize;
    private deserialize;
}
