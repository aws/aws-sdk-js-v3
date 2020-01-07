import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ExportCertificateRequest, ExportCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExportCertificateCommandInput = ExportCertificateRequest;
export declare type ExportCertificateCommandOutput = ExportCertificateResponse & __MetadataBearer;
export declare class ExportCertificateCommand extends $Command<ExportCertificateCommandInput, ExportCertificateCommandOutput, ACMClientResolvedConfig> {
    readonly input: ExportCertificateCommandInput;
    constructor(input: ExportCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportCertificateCommandInput, ExportCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
