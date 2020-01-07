import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketWebsiteOutput, GetBucketWebsiteRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketWebsiteCommandInput = GetBucketWebsiteRequest;
export declare type GetBucketWebsiteCommandOutput = GetBucketWebsiteOutput & __MetadataBearer;
export declare class GetBucketWebsiteCommand extends $Command<GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketWebsiteCommandInput;
    constructor(input: GetBucketWebsiteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput>;
    private serialize;
    private deserialize;
}
