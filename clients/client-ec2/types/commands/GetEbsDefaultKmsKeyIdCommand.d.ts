import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetEbsDefaultKmsKeyIdRequest, GetEbsDefaultKmsKeyIdResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetEbsDefaultKmsKeyIdCommandInput = GetEbsDefaultKmsKeyIdRequest;
export declare type GetEbsDefaultKmsKeyIdCommandOutput = GetEbsDefaultKmsKeyIdResult & __MetadataBearer;
export declare class GetEbsDefaultKmsKeyIdCommand extends $Command<GetEbsDefaultKmsKeyIdCommandInput, GetEbsDefaultKmsKeyIdCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetEbsDefaultKmsKeyIdCommandInput;
    constructor(input: GetEbsDefaultKmsKeyIdCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEbsDefaultKmsKeyIdCommandInput, GetEbsDefaultKmsKeyIdCommandOutput>;
    private serialize;
    private deserialize;
}
