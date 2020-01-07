import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketCorsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketCorsCommandInput = PutBucketCorsRequest;
export declare type PutBucketCorsCommandOutput = __MetadataBearer;
export declare class PutBucketCorsCommand extends $Command<PutBucketCorsCommandInput, PutBucketCorsCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketCorsCommandInput;
    constructor(input: PutBucketCorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketCorsCommandInput, PutBucketCorsCommandOutput>;
    private serialize;
    private deserialize;
}
