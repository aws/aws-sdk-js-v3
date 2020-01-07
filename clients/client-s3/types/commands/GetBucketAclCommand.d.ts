import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketAclOutput, GetBucketAclRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketAclCommandInput = GetBucketAclRequest;
export declare type GetBucketAclCommandOutput = GetBucketAclOutput & __MetadataBearer;
export declare class GetBucketAclCommand extends $Command<GetBucketAclCommandInput, GetBucketAclCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketAclCommandInput;
    constructor(input: GetBucketAclCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketAclCommandInput, GetBucketAclCommandOutput>;
    private serialize;
    private deserialize;
}
