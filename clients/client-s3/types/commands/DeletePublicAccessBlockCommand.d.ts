import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeletePublicAccessBlockRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePublicAccessBlockCommandInput = DeletePublicAccessBlockRequest;
export declare type DeletePublicAccessBlockCommandOutput = __MetadataBearer;
export declare class DeletePublicAccessBlockCommand extends $Command<DeletePublicAccessBlockCommandInput, DeletePublicAccessBlockCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeletePublicAccessBlockCommandInput;
    constructor(input: DeletePublicAccessBlockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePublicAccessBlockCommandInput, DeletePublicAccessBlockCommandOutput>;
    private serialize;
    private deserialize;
}
