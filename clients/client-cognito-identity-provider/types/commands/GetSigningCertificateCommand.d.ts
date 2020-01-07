import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetSigningCertificateRequest, GetSigningCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSigningCertificateCommandInput = GetSigningCertificateRequest;
export declare type GetSigningCertificateCommandOutput = GetSigningCertificateResponse & __MetadataBearer;
export declare class GetSigningCertificateCommand extends $Command<GetSigningCertificateCommandInput, GetSigningCertificateCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetSigningCertificateCommandInput;
    constructor(input: GetSigningCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSigningCertificateCommandInput, GetSigningCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
