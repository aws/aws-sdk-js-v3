import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteObjectOutput, DeleteObjectRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteObjectCommandInput = DeleteObjectRequest;
export declare type DeleteObjectCommandOutput = DeleteObjectOutput & __MetadataBearer;
export declare class DeleteObjectCommand extends $Command<DeleteObjectCommandInput, DeleteObjectCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteObjectCommandInput;
    constructor(input: DeleteObjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteObjectCommandInput, DeleteObjectCommandOutput>;
    private serialize;
    private deserialize;
}
