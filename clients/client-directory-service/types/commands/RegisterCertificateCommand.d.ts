import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { RegisterCertificateRequest, RegisterCertificateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterCertificateCommandInput = RegisterCertificateRequest;
export declare type RegisterCertificateCommandOutput = RegisterCertificateResult & __MetadataBearer;
export declare class RegisterCertificateCommand extends $Command<RegisterCertificateCommandInput, RegisterCertificateCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: RegisterCertificateCommandInput;
    constructor(input: RegisterCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterCertificateCommandInput, RegisterCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
