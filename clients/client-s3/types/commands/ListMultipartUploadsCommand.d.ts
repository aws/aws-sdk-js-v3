import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListMultipartUploadsOutput, ListMultipartUploadsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMultipartUploadsCommandInput = ListMultipartUploadsRequest;
export declare type ListMultipartUploadsCommandOutput = ListMultipartUploadsOutput & __MetadataBearer;
export declare class ListMultipartUploadsCommand extends $Command<ListMultipartUploadsCommandInput, ListMultipartUploadsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListMultipartUploadsCommandInput;
    constructor(input: ListMultipartUploadsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMultipartUploadsCommandInput, ListMultipartUploadsCommandOutput>;
    private serialize;
    private deserialize;
}
