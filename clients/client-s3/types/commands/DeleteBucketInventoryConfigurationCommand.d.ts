import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketInventoryConfigurationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBucketInventoryConfigurationCommandInput = DeleteBucketInventoryConfigurationRequest;
export declare type DeleteBucketInventoryConfigurationCommandOutput = __MetadataBearer;
export declare class DeleteBucketInventoryConfigurationCommand extends $Command<DeleteBucketInventoryConfigurationCommandInput, DeleteBucketInventoryConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketInventoryConfigurationCommandInput;
    constructor(input: DeleteBucketInventoryConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketInventoryConfigurationCommandInput, DeleteBucketInventoryConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
