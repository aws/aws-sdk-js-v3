import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectAclOutput, GetObjectAclRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetObjectAclCommandInput = GetObjectAclRequest;
export declare type GetObjectAclCommandOutput = GetObjectAclOutput & __MetadataBearer;
export declare class GetObjectAclCommand extends $Command<GetObjectAclCommandInput, GetObjectAclCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectAclCommandInput;
    constructor(input: GetObjectAclCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectAclCommandInput, GetObjectAclCommandOutput>;
    private serialize;
    private deserialize;
}
