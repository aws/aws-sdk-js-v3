import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketCorsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBucketCorsCommandInput = DeleteBucketCorsRequest;
export declare type DeleteBucketCorsCommandOutput = __MetadataBearer;
export declare class DeleteBucketCorsCommand extends $Command<DeleteBucketCorsCommandInput, DeleteBucketCorsCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketCorsCommandInput;
    constructor(input: DeleteBucketCorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketCorsCommandInput, DeleteBucketCorsCommandOutput>;
    private serialize;
    private deserialize;
}
