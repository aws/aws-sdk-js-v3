import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketPolicyOutput, GetBucketPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketPolicyCommandInput = GetBucketPolicyRequest;
export declare type GetBucketPolicyCommandOutput = GetBucketPolicyOutput & __MetadataBearer;
export declare class GetBucketPolicyCommand extends $Command<GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketPolicyCommandInput;
    constructor(input: GetBucketPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
