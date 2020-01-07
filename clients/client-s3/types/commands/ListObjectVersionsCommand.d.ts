import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListObjectVersionsOutput, ListObjectVersionsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListObjectVersionsCommandInput = ListObjectVersionsRequest;
export declare type ListObjectVersionsCommandOutput = ListObjectVersionsOutput & __MetadataBearer;
export declare class ListObjectVersionsCommand extends $Command<ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListObjectVersionsCommandInput;
    constructor(input: ListObjectVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
