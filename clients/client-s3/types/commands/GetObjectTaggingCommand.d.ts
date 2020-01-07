import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectTaggingOutput, GetObjectTaggingRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetObjectTaggingCommandInput = GetObjectTaggingRequest;
export declare type GetObjectTaggingCommandOutput = GetObjectTaggingOutput & __MetadataBearer;
export declare class GetObjectTaggingCommand extends $Command<GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectTaggingCommandInput;
    constructor(input: GetObjectTaggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
