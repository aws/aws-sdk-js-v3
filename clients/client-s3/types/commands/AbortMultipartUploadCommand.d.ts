import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { AbortMultipartUploadOutput, AbortMultipartUploadRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AbortMultipartUploadCommandInput = AbortMultipartUploadRequest;
export declare type AbortMultipartUploadCommandOutput = AbortMultipartUploadOutput & __MetadataBearer;
export declare class AbortMultipartUploadCommand extends $Command<AbortMultipartUploadCommandInput, AbortMultipartUploadCommandOutput, S3ClientResolvedConfig> {
    readonly input: AbortMultipartUploadCommandInput;
    constructor(input: AbortMultipartUploadCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AbortMultipartUploadCommandInput, AbortMultipartUploadCommandOutput>;
    private serialize;
    private deserialize;
}
