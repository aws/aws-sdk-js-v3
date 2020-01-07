import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetEbsEncryptionByDefaultRequest, GetEbsEncryptionByDefaultResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetEbsEncryptionByDefaultCommandInput = GetEbsEncryptionByDefaultRequest;
export declare type GetEbsEncryptionByDefaultCommandOutput = GetEbsEncryptionByDefaultResult & __MetadataBearer;
export declare class GetEbsEncryptionByDefaultCommand extends $Command<GetEbsEncryptionByDefaultCommandInput, GetEbsEncryptionByDefaultCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetEbsEncryptionByDefaultCommandInput;
    constructor(input: GetEbsEncryptionByDefaultCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEbsEncryptionByDefaultCommandInput, GetEbsEncryptionByDefaultCommandOutput>;
    private serialize;
    private deserialize;
}
