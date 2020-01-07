import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketLoggingOutput, GetBucketLoggingRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBucketLoggingCommandInput = GetBucketLoggingRequest;
export declare type GetBucketLoggingCommandOutput = GetBucketLoggingOutput & __MetadataBearer;
export declare class GetBucketLoggingCommand extends $Command<GetBucketLoggingCommandInput, GetBucketLoggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketLoggingCommandInput;
    constructor(input: GetBucketLoggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketLoggingCommandInput, GetBucketLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
