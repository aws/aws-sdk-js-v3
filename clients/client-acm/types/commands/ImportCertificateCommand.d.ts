import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ImportCertificateRequest, ImportCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportCertificateCommandInput = ImportCertificateRequest;
export declare type ImportCertificateCommandOutput = ImportCertificateResponse & __MetadataBearer;
export declare class ImportCertificateCommand extends $Command<ImportCertificateCommandInput, ImportCertificateCommandOutput, ACMClientResolvedConfig> {
    readonly input: ImportCertificateCommandInput;
    constructor(input: ImportCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportCertificateCommandInput, ImportCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
