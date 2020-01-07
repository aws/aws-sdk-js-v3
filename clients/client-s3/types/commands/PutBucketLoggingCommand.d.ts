import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketLoggingRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutBucketLoggingCommandInput = PutBucketLoggingRequest;
export declare type PutBucketLoggingCommandOutput = __MetadataBearer;
export declare class PutBucketLoggingCommand extends $Command<PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketLoggingCommandInput;
    constructor(input: PutBucketLoggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput>;
    private serialize;
    private deserialize;
}
