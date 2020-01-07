import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { DescribeCertificateAuthorityAuditReportRequest, DescribeCertificateAuthorityAuditReportResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCertificateAuthorityAuditReportCommandInput = DescribeCertificateAuthorityAuditReportRequest;
export declare type DescribeCertificateAuthorityAuditReportCommandOutput = DescribeCertificateAuthorityAuditReportResponse & __MetadataBearer;
export declare class DescribeCertificateAuthorityAuditReportCommand extends $Command<DescribeCertificateAuthorityAuditReportCommandInput, DescribeCertificateAuthorityAuditReportCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: DescribeCertificateAuthorityAuditReportCommandInput;
    constructor(input: DescribeCertificateAuthorityAuditReportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCertificateAuthorityAuditReportCommandInput, DescribeCertificateAuthorityAuditReportCommandOutput>;
    private serialize;
    private deserialize;
}
