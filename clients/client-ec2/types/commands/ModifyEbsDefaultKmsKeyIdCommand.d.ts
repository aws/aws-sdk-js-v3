import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyEbsDefaultKmsKeyIdRequest, ModifyEbsDefaultKmsKeyIdResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyEbsDefaultKmsKeyIdCommandInput = ModifyEbsDefaultKmsKeyIdRequest;
export declare type ModifyEbsDefaultKmsKeyIdCommandOutput = ModifyEbsDefaultKmsKeyIdResult & __MetadataBearer;
export declare class ModifyEbsDefaultKmsKeyIdCommand extends $Command<ModifyEbsDefaultKmsKeyIdCommandInput, ModifyEbsDefaultKmsKeyIdCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyEbsDefaultKmsKeyIdCommandInput;
    constructor(input: ModifyEbsDefaultKmsKeyIdCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyEbsDefaultKmsKeyIdCommandInput, ModifyEbsDefaultKmsKeyIdCommandOutput>;
    private serialize;
    private deserialize;
}
