import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetEbsDefaultKmsKeyIdRequest, ResetEbsDefaultKmsKeyIdResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetEbsDefaultKmsKeyIdCommandInput = ResetEbsDefaultKmsKeyIdRequest;
export declare type ResetEbsDefaultKmsKeyIdCommandOutput = ResetEbsDefaultKmsKeyIdResult & __MetadataBearer;
export declare class ResetEbsDefaultKmsKeyIdCommand extends $Command<ResetEbsDefaultKmsKeyIdCommandInput, ResetEbsDefaultKmsKeyIdCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ResetEbsDefaultKmsKeyIdCommandInput;
    constructor(input: ResetEbsDefaultKmsKeyIdCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetEbsDefaultKmsKeyIdCommandInput, ResetEbsDefaultKmsKeyIdCommandOutput>;
    private serialize;
    private deserialize;
}
