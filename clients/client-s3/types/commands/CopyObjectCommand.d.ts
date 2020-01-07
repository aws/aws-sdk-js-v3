import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { CopyObjectOutput, CopyObjectRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyObjectCommandInput = CopyObjectRequest;
export declare type CopyObjectCommandOutput = CopyObjectOutput & __MetadataBearer;
export declare class CopyObjectCommand extends $Command<CopyObjectCommandInput, CopyObjectCommandOutput, S3ClientResolvedConfig> {
    readonly input: CopyObjectCommandInput;
    constructor(input: CopyObjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyObjectCommandInput, CopyObjectCommandOutput>;
    private serialize;
    private deserialize;
}
