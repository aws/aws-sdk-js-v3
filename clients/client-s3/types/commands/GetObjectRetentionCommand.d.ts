import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectRetentionOutput, GetObjectRetentionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetObjectRetentionCommandInput = GetObjectRetentionRequest;
export declare type GetObjectRetentionCommandOutput = GetObjectRetentionOutput & __MetadataBearer;
export declare class GetObjectRetentionCommand extends $Command<GetObjectRetentionCommandInput, GetObjectRetentionCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectRetentionCommandInput;
    constructor(input: GetObjectRetentionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectRetentionCommandInput, GetObjectRetentionCommandOutput>;
    private serialize;
    private deserialize;
}
