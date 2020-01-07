import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListObjectsV2Output, ListObjectsV2Request } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListObjectsV2CommandInput = ListObjectsV2Request;
export declare type ListObjectsV2CommandOutput = ListObjectsV2Output & __MetadataBearer;
export declare class ListObjectsV2Command extends $Command<ListObjectsV2CommandInput, ListObjectsV2CommandOutput, S3ClientResolvedConfig> {
    readonly input: ListObjectsV2CommandInput;
    constructor(input: ListObjectsV2CommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListObjectsV2CommandInput, ListObjectsV2CommandOutput>;
    private serialize;
    private deserialize;
}
