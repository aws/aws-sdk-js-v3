import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutObjectAclOutput, PutObjectAclRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutObjectAclCommandInput = PutObjectAclRequest;
export declare type PutObjectAclCommandOutput = PutObjectAclOutput & __MetadataBearer;
export declare class PutObjectAclCommand extends $Command<PutObjectAclCommandInput, PutObjectAclCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutObjectAclCommandInput;
    constructor(input: PutObjectAclCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutObjectAclCommandInput, PutObjectAclCommandOutput>;
    private serialize;
    private deserialize;
}
