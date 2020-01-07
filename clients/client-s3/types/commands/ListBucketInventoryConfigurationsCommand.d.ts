import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListBucketInventoryConfigurationsOutput, ListBucketInventoryConfigurationsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBucketInventoryConfigurationsCommandInput = ListBucketInventoryConfigurationsRequest;
export declare type ListBucketInventoryConfigurationsCommandOutput = ListBucketInventoryConfigurationsOutput & __MetadataBearer;
export declare class ListBucketInventoryConfigurationsCommand extends $Command<ListBucketInventoryConfigurationsCommandInput, ListBucketInventoryConfigurationsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListBucketInventoryConfigurationsCommandInput;
    constructor(input: ListBucketInventoryConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBucketInventoryConfigurationsCommandInput, ListBucketInventoryConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
