import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisableEbsEncryptionByDefaultRequest, DisableEbsEncryptionByDefaultResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableEbsEncryptionByDefaultCommandInput = DisableEbsEncryptionByDefaultRequest;
export declare type DisableEbsEncryptionByDefaultCommandOutput = DisableEbsEncryptionByDefaultResult & __MetadataBearer;
export declare class DisableEbsEncryptionByDefaultCommand extends $Command<DisableEbsEncryptionByDefaultCommandInput, DisableEbsEncryptionByDefaultCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisableEbsEncryptionByDefaultCommandInput;
    constructor(input: DisableEbsEncryptionByDefaultCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableEbsEncryptionByDefaultCommandInput, DisableEbsEncryptionByDefaultCommandOutput>;
    private serialize;
    private deserialize;
}
