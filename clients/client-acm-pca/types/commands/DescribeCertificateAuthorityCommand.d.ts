import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { DescribeCertificateAuthorityRequest, DescribeCertificateAuthorityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCertificateAuthorityCommandInput = DescribeCertificateAuthorityRequest;
export declare type DescribeCertificateAuthorityCommandOutput = DescribeCertificateAuthorityResponse & __MetadataBearer;
export declare class DescribeCertificateAuthorityCommand extends $Command<DescribeCertificateAuthorityCommandInput, DescribeCertificateAuthorityCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: DescribeCertificateAuthorityCommandInput;
    constructor(input: DescribeCertificateAuthorityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCertificateAuthorityCommandInput, DescribeCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
