import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { CreateCertificateAuthorityRequest, CreateCertificateAuthorityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCertificateAuthorityCommandInput = CreateCertificateAuthorityRequest;
export declare type CreateCertificateAuthorityCommandOutput = CreateCertificateAuthorityResponse & __MetadataBearer;
export declare class CreateCertificateAuthorityCommand extends $Command<CreateCertificateAuthorityCommandInput, CreateCertificateAuthorityCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: CreateCertificateAuthorityCommandInput;
    constructor(input: CreateCertificateAuthorityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCertificateAuthorityCommandInput, CreateCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
