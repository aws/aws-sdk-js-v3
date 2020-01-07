import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportClientVpnClientCertificateRevocationListRequest, ImportClientVpnClientCertificateRevocationListResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportClientVpnClientCertificateRevocationListCommandInput = ImportClientVpnClientCertificateRevocationListRequest;
export declare type ImportClientVpnClientCertificateRevocationListCommandOutput = ImportClientVpnClientCertificateRevocationListResult & __MetadataBearer;
export declare class ImportClientVpnClientCertificateRevocationListCommand extends $Command<ImportClientVpnClientCertificateRevocationListCommandInput, ImportClientVpnClientCertificateRevocationListCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ImportClientVpnClientCertificateRevocationListCommandInput;
    constructor(input: ImportClientVpnClientCertificateRevocationListCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportClientVpnClientCertificateRevocationListCommandInput, ImportClientVpnClientCertificateRevocationListCommandOutput>;
    private serialize;
    private deserialize;
}
