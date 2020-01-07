/// <reference types="node" />
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { UploadPartOutput, UploadPartRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UploadPartCommandInput = Omit<UploadPartRequest, "Body"> & {
    Body?: UploadPartRequest["Body"] | string | Uint8Array | Buffer;
};
export declare type UploadPartCommandOutput = UploadPartOutput & __MetadataBearer;
export declare class UploadPartCommand extends $Command<UploadPartCommandInput, UploadPartCommandOutput, S3ClientResolvedConfig> {
    readonly input: UploadPartCommandInput;
    constructor(input: UploadPartCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UploadPartCommandInput, UploadPartCommandOutput>;
    private serialize;
    private deserialize;
}
