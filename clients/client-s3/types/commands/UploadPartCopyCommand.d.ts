import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { UploadPartCopyOutput, UploadPartCopyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UploadPartCopyCommandInput = UploadPartCopyRequest;
export declare type UploadPartCopyCommandOutput = UploadPartCopyOutput & __MetadataBearer;
export declare class UploadPartCopyCommand extends $Command<UploadPartCopyCommandInput, UploadPartCopyCommandOutput, S3ClientResolvedConfig> {
    readonly input: UploadPartCopyCommandInput;
    constructor(input: UploadPartCopyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UploadPartCopyCommandInput, UploadPartCopyCommandOutput>;
    private serialize;
    private deserialize;
}
