import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteObjectsOutput, DeleteObjectsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteObjectsCommandInput = DeleteObjectsRequest;
export declare type DeleteObjectsCommandOutput = DeleteObjectsOutput & __MetadataBearer;
export declare class DeleteObjectsCommand extends $Command<DeleteObjectsCommandInput, DeleteObjectsCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteObjectsCommandInput;
    constructor(input: DeleteObjectsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteObjectsCommandInput, DeleteObjectsCommandOutput>;
    private serialize;
    private deserialize;
}
