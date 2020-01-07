import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectLockConfigurationOutput, GetObjectLockConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetObjectLockConfigurationCommandInput = GetObjectLockConfigurationRequest;
export declare type GetObjectLockConfigurationCommandOutput = GetObjectLockConfigurationOutput & __MetadataBearer;
export declare class GetObjectLockConfigurationCommand extends $Command<GetObjectLockConfigurationCommandInput, GetObjectLockConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectLockConfigurationCommandInput;
    constructor(input: GetObjectLockConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectLockConfigurationCommandInput, GetObjectLockConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
