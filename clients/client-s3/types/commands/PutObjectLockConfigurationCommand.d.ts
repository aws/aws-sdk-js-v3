import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutObjectLockConfigurationOutput, PutObjectLockConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutObjectLockConfigurationCommandInput = PutObjectLockConfigurationRequest;
export declare type PutObjectLockConfigurationCommandOutput = PutObjectLockConfigurationOutput & __MetadataBearer;
export declare class PutObjectLockConfigurationCommand extends $Command<PutObjectLockConfigurationCommandInput, PutObjectLockConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutObjectLockConfigurationCommandInput;
    constructor(input: PutObjectLockConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutObjectLockConfigurationCommandInput, PutObjectLockConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
