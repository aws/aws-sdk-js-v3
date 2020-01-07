import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListObjectsOutput, ListObjectsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListObjectsCommandInput = ListObjectsRequest;
export declare type ListObjectsCommandOutput = ListObjectsOutput & __MetadataBearer;
export declare class ListObjectsCommand extends $Command<ListObjectsCommandInput, ListObjectsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListObjectsCommandInput;
    constructor(input: ListObjectsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListObjectsCommandInput, ListObjectsCommandOutput>;
    private serialize;
    private deserialize;
}
