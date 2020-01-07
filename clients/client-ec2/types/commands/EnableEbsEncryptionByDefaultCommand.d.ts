import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableEbsEncryptionByDefaultRequest, EnableEbsEncryptionByDefaultResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableEbsEncryptionByDefaultCommandInput = EnableEbsEncryptionByDefaultRequest;
export declare type EnableEbsEncryptionByDefaultCommandOutput = EnableEbsEncryptionByDefaultResult & __MetadataBearer;
export declare class EnableEbsEncryptionByDefaultCommand extends $Command<EnableEbsEncryptionByDefaultCommandInput, EnableEbsEncryptionByDefaultCommandOutput, EC2ClientResolvedConfig> {
    readonly input: EnableEbsEncryptionByDefaultCommandInput;
    constructor(input: EnableEbsEncryptionByDefaultCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableEbsEncryptionByDefaultCommandInput, EnableEbsEncryptionByDefaultCommandOutput>;
    private serialize;
    private deserialize;
}
