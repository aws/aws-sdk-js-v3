import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketRequestPaymentOutput, GetBucketRequestPaymentRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketRequestPaymentCommandInput = GetBucketRequestPaymentRequest;
export declare type GetBucketRequestPaymentCommandOutput = GetBucketRequestPaymentOutput & __MetadataBearer;
export declare class GetBucketRequestPaymentCommand extends $Command<GetBucketRequestPaymentCommandInput, GetBucketRequestPaymentCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketRequestPaymentCommandInput;
    constructor(input: GetBucketRequestPaymentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketRequestPaymentCommandInput, GetBucketRequestPaymentCommandOutput>;
    private serialize;
    private deserialize;
}
