import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketWebsiteRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBucketWebsiteCommandInput = DeleteBucketWebsiteRequest;
export declare type DeleteBucketWebsiteCommandOutput = __MetadataBearer;
export declare class DeleteBucketWebsiteCommand extends $Command<DeleteBucketWebsiteCommandInput, DeleteBucketWebsiteCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketWebsiteCommandInput;
    constructor(input: DeleteBucketWebsiteCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketWebsiteCommandInput, DeleteBucketWebsiteCommandOutput>;
    private serialize;
    private deserialize;
}
