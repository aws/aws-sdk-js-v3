import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { CreateCertificateAuthorityAuditReportRequest, CreateCertificateAuthorityAuditReportResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCertificateAuthorityAuditReportCommandInput = CreateCertificateAuthorityAuditReportRequest;
export declare type CreateCertificateAuthorityAuditReportCommandOutput = CreateCertificateAuthorityAuditReportResponse & __MetadataBearer;
export declare class CreateCertificateAuthorityAuditReportCommand extends $Command<CreateCertificateAuthorityAuditReportCommandInput, CreateCertificateAuthorityAuditReportCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: CreateCertificateAuthorityAuditReportCommandInput;
    constructor(input: CreateCertificateAuthorityAuditReportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCertificateAuthorityAuditReportCommandInput, CreateCertificateAuthorityAuditReportCommandOutput>;
    private serialize;
    private deserialize;
}
