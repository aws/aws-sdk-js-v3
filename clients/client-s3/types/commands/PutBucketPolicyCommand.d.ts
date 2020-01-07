import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketPolicyCommandInput = PutBucketPolicyRequest;
export declare type PutBucketPolicyCommandOutput = __MetadataBearer;
export declare class PutBucketPolicyCommand extends $Command<PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketPolicyCommandInput;
    constructor(input: PutBucketPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
