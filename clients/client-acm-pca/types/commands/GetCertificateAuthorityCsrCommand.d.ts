import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { GetCertificateAuthorityCsrRequest, GetCertificateAuthorityCsrResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCertificateAuthorityCsrCommandInput = GetCertificateAuthorityCsrRequest;
export declare type GetCertificateAuthorityCsrCommandOutput = GetCertificateAuthorityCsrResponse & __MetadataBearer;
export declare class GetCertificateAuthorityCsrCommand extends $Command<GetCertificateAuthorityCsrCommandInput, GetCertificateAuthorityCsrCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: GetCertificateAuthorityCsrCommandInput;
    constructor(input: GetCertificateAuthorityCsrCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCertificateAuthorityCsrCommandInput, GetCertificateAuthorityCsrCommandOutput>;
    private serialize;
    private deserialize;
}
