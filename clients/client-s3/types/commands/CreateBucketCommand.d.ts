import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { CreateBucketOutput, CreateBucketRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateBucketCommandInput = CreateBucketRequest;
export declare type CreateBucketCommandOutput = CreateBucketOutput & __MetadataBearer;
export declare class CreateBucketCommand extends $Command<CreateBucketCommandInput, CreateBucketCommandOutput, S3ClientResolvedConfig> {
    readonly input: CreateBucketCommandInput;
    constructor(input: CreateBucketCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBucketCommandInput, CreateBucketCommandOutput>;
    private serialize;
    private deserialize;
}
