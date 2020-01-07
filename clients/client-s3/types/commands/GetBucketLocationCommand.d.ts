import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketLocationOutput, GetBucketLocationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketLocationCommandInput = GetBucketLocationRequest;
export declare type GetBucketLocationCommandOutput = GetBucketLocationOutput & __MetadataBearer;
export declare class GetBucketLocationCommand extends $Command<GetBucketLocationCommandInput, GetBucketLocationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketLocationCommandInput;
    constructor(input: GetBucketLocationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketLocationCommandInput, GetBucketLocationCommandOutput>;
    private serialize;
    private deserialize;
}
