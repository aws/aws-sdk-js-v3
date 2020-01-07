import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ExportClientVpnClientCertificateRevocationListRequest, ExportClientVpnClientCertificateRevocationListResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExportClientVpnClientCertificateRevocationListCommandInput = ExportClientVpnClientCertificateRevocationListRequest;
export declare type ExportClientVpnClientCertificateRevocationListCommandOutput = ExportClientVpnClientCertificateRevocationListResult & __MetadataBearer;
export declare class ExportClientVpnClientCertificateRevocationListCommand extends $Command<ExportClientVpnClientCertificateRevocationListCommandInput, ExportClientVpnClientCertificateRevocationListCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ExportClientVpnClientCertificateRevocationListCommandInput;
    constructor(input: ExportClientVpnClientCertificateRevocationListCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportClientVpnClientCertificateRevocationListCommandInput, ExportClientVpnClientCertificateRevocationListCommandOutput>;
    private serialize;
    private deserialize;
}
