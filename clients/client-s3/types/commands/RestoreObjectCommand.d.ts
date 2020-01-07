import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { RestoreObjectOutput, RestoreObjectRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreObjectCommandInput = RestoreObjectRequest;
export declare type RestoreObjectCommandOutput = RestoreObjectOutput & __MetadataBearer;
export declare class RestoreObjectCommand extends $Command<RestoreObjectCommandInput, RestoreObjectCommandOutput, S3ClientResolvedConfig> {
    readonly input: RestoreObjectCommandInput;
    constructor(input: RestoreObjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreObjectCommandInput, RestoreObjectCommandOutput>;
    private serialize;
    private deserialize;
}
