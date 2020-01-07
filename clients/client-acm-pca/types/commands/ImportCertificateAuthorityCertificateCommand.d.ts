import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { ImportCertificateAuthorityCertificateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportCertificateAuthorityCertificateCommandInput = ImportCertificateAuthorityCertificateRequest;
export declare type ImportCertificateAuthorityCertificateCommandOutput = __MetadataBearer;
export declare class ImportCertificateAuthorityCertificateCommand extends $Command<ImportCertificateAuthorityCertificateCommandInput, ImportCertificateAuthorityCertificateCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: ImportCertificateAuthorityCertificateCommandInput;
    constructor(input: ImportCertificateAuthorityCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportCertificateAuthorityCertificateCommandInput, ImportCertificateAuthorityCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
