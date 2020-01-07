import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetPublicAccessBlockOutput, GetPublicAccessBlockRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPublicAccessBlockCommandInput = GetPublicAccessBlockRequest;
export declare type GetPublicAccessBlockCommandOutput = GetPublicAccessBlockOutput & __MetadataBearer;
export declare class GetPublicAccessBlockCommand extends $Command<GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: GetPublicAccessBlockCommandInput;
    constructor(input: GetPublicAccessBlockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput>;
    private serialize;
    private deserialize;
}
