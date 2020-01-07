import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutObjectTaggingOutput, PutObjectTaggingRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutObjectTaggingCommandInput = PutObjectTaggingRequest;
export declare type PutObjectTaggingCommandOutput = PutObjectTaggingOutput & __MetadataBearer;
export declare class PutObjectTaggingCommand extends $Command<PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutObjectTaggingCommandInput;
    constructor(input: PutObjectTaggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
