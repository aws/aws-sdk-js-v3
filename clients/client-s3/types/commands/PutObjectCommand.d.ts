/// <reference types="node" />
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutObjectOutput, PutObjectRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutObjectCommandInput = Omit<PutObjectRequest, "Body"> & {
    Body?: PutObjectRequest["Body"] | string | Uint8Array | Buffer;
};
export declare type PutObjectCommandOutput = PutObjectOutput & __MetadataBearer;
export declare class PutObjectCommand extends $Command<PutObjectCommandInput, PutObjectCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutObjectCommandInput;
    constructor(input: PutObjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutObjectCommandInput, PutObjectCommandOutput>;
    private serialize;
    private deserialize;
}
