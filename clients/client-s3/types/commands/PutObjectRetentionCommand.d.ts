import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutObjectRetentionOutput, PutObjectRetentionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutObjectRetentionCommandInput = PutObjectRetentionRequest;
export declare type PutObjectRetentionCommandOutput = PutObjectRetentionOutput & __MetadataBearer;
export declare class PutObjectRetentionCommand extends $Command<PutObjectRetentionCommandInput, PutObjectRetentionCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutObjectRetentionCommandInput;
    constructor(input: PutObjectRetentionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutObjectRetentionCommandInput, PutObjectRetentionCommandOutput>;
    private serialize;
    private deserialize;
}
