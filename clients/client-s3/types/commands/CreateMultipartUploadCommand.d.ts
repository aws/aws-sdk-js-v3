import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { CreateMultipartUploadOutput, CreateMultipartUploadRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateMultipartUploadCommandInput = CreateMultipartUploadRequest;
export declare type CreateMultipartUploadCommandOutput = CreateMultipartUploadOutput & __MetadataBearer;
export declare class CreateMultipartUploadCommand extends $Command<CreateMultipartUploadCommandInput, CreateMultipartUploadCommandOutput, S3ClientResolvedConfig> {
    readonly input: CreateMultipartUploadCommandInput;
    constructor(input: CreateMultipartUploadCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMultipartUploadCommandInput, CreateMultipartUploadCommandOutput>;
    private serialize;
    private deserialize;
}
