import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { HeadObjectOutput, HeadObjectRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type HeadObjectCommandInput = HeadObjectRequest;
export declare type HeadObjectCommandOutput = HeadObjectOutput & __MetadataBearer;
export declare class HeadObjectCommand extends $Command<HeadObjectCommandInput, HeadObjectCommandOutput, S3ClientResolvedConfig> {
    readonly input: HeadObjectCommandInput;
    constructor(input: HeadObjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<HeadObjectCommandInput, HeadObjectCommandOutput>;
    private serialize;
    private deserialize;
}
