import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketWebsiteRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketWebsiteCommandInput = PutBucketWebsiteRequest;
export declare type PutBucketWebsiteCommandOutput = __MetadataBearer;
export declare class PutBucketWebsiteCommand extends $Command<PutBucketWebsiteCommandInput, PutBucketWebsiteCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketWebsiteCommandInput;
    constructor(input: PutBucketWebsiteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketWebsiteCommandInput, PutBucketWebsiteCommandOutput>;
    private serialize;
    private deserialize;
}
