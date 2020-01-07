import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketRequestPaymentRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketRequestPaymentCommandInput = PutBucketRequestPaymentRequest;
export declare type PutBucketRequestPaymentCommandOutput = __MetadataBearer;
export declare class PutBucketRequestPaymentCommand extends $Command<PutBucketRequestPaymentCommandInput, PutBucketRequestPaymentCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketRequestPaymentCommandInput;
    constructor(input: PutBucketRequestPaymentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketRequestPaymentCommandInput, PutBucketRequestPaymentCommandOutput>;
    private serialize;
    private deserialize;
}
