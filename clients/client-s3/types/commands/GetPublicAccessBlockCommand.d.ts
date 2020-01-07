import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetPublicAccessBlockOutput, GetPublicAccessBlockRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPublicAccessBlockCommandInput = GetPublicAccessBlockRequest;
export declare type GetPublicAccessBlockCommandOutput = GetPublicAccessBlockOutput & __MetadataBearer;
export declare class GetPublicAccessBlockCommand extends $Command<GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetPublicAccessBlockCommandInput;
    constructor(input: GetPublicAccessBlockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput>;
    private serialize;
    private deserialize;
}
