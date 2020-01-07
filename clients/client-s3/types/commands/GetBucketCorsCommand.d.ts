import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketCorsOutput, GetBucketCorsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketCorsCommandInput = GetBucketCorsRequest;
export declare type GetBucketCorsCommandOutput = GetBucketCorsOutput & __MetadataBearer;
export declare class GetBucketCorsCommand extends $Command<GetBucketCorsCommandInput, GetBucketCorsCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketCorsCommandInput;
    constructor(input: GetBucketCorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketCorsCommandInput, GetBucketCorsCommandOutput>;
    private serialize;
    private deserialize;
}
