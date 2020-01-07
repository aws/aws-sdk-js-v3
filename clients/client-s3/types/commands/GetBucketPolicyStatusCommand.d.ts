import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketPolicyStatusOutput, GetBucketPolicyStatusRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketPolicyStatusCommandInput = GetBucketPolicyStatusRequest;
export declare type GetBucketPolicyStatusCommandOutput = GetBucketPolicyStatusOutput & __MetadataBearer;
export declare class GetBucketPolicyStatusCommand extends $Command<GetBucketPolicyStatusCommandInput, GetBucketPolicyStatusCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketPolicyStatusCommandInput;
    constructor(input: GetBucketPolicyStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketPolicyStatusCommandInput, GetBucketPolicyStatusCommandOutput>;
    private serialize;
    private deserialize;
}
