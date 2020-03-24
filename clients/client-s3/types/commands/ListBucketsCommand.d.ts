import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListBucketsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBucketsCommandInput = {};
export declare type ListBucketsCommandOutput = ListBucketsOutput & __MetadataBearer;
export declare class ListBucketsCommand extends $Command<ListBucketsCommandInput, ListBucketsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListBucketsCommandInput;
    constructor(input: ListBucketsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBucketsCommandInput, ListBucketsCommandOutput>;
    private serialize;
    private deserialize;
}
