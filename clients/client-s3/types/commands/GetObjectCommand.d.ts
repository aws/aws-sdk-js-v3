import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectOutput, GetObjectRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetObjectCommandInput = GetObjectRequest;
export declare type GetObjectCommandOutput = GetObjectOutput & __MetadataBearer;
export declare class GetObjectCommand extends $Command<GetObjectCommandInput, GetObjectCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectCommandInput;
    constructor(input: GetObjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectCommandInput, GetObjectCommandOutput>;
    private serialize;
    private deserialize;
}
