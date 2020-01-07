import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteObjectTaggingOutput, DeleteObjectTaggingRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteObjectTaggingCommandInput = DeleteObjectTaggingRequest;
export declare type DeleteObjectTaggingCommandOutput = DeleteObjectTaggingOutput & __MetadataBearer;
export declare class DeleteObjectTaggingCommand extends $Command<DeleteObjectTaggingCommandInput, DeleteObjectTaggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteObjectTaggingCommandInput;
    constructor(input: DeleteObjectTaggingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteObjectTaggingCommandInput, DeleteObjectTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
