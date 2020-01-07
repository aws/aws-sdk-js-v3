import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBucketPolicyCommandInput = DeleteBucketPolicyRequest;
export declare type DeleteBucketPolicyCommandOutput = __MetadataBearer;
export declare class DeleteBucketPolicyCommand extends $Command<DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketPolicyCommandInput;
    constructor(input: DeleteBucketPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
