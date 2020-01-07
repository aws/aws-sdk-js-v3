import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { GetCertificateAuthorityCertificateRequest, GetCertificateAuthorityCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCertificateAuthorityCertificateCommandInput = GetCertificateAuthorityCertificateRequest;
export declare type GetCertificateAuthorityCertificateCommandOutput = GetCertificateAuthorityCertificateResponse & __MetadataBearer;
export declare class GetCertificateAuthorityCertificateCommand extends $Command<GetCertificateAuthorityCertificateCommandInput, GetCertificateAuthorityCertificateCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: GetCertificateAuthorityCertificateCommandInput;
    constructor(input: GetCertificateAuthorityCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCertificateAuthorityCertificateCommandInput, GetCertificateAuthorityCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
