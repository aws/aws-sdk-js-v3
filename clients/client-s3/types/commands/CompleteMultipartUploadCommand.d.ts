import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { CompleteMultipartUploadOutput, CompleteMultipartUploadRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CompleteMultipartUploadCommandInput = CompleteMultipartUploadRequest;
export declare type CompleteMultipartUploadCommandOutput = CompleteMultipartUploadOutput & __MetadataBearer;
export declare class CompleteMultipartUploadCommand extends $Command<CompleteMultipartUploadCommandInput, CompleteMultipartUploadCommandOutput, S3ClientResolvedConfig> {
    readonly input: CompleteMultipartUploadCommandInput;
    constructor(input: CompleteMultipartUploadCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CompleteMultipartUploadCommandInput, CompleteMultipartUploadCommandOutput>;
    private serialize;
    private deserialize;
}
