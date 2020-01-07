import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketAclRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketAclCommandInput = PutBucketAclRequest;
export declare type PutBucketAclCommandOutput = __MetadataBearer;
export declare class PutBucketAclCommand extends $Command<PutBucketAclCommandInput, PutBucketAclCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketAclCommandInput;
    constructor(input: PutBucketAclCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketAclCommandInput, PutBucketAclCommandOutput>;
    private serialize;
    private deserialize;
}
