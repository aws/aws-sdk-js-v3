import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { IssueCertificateRequest, IssueCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type IssueCertificateCommandInput = IssueCertificateRequest;
export declare type IssueCertificateCommandOutput = IssueCertificateResponse & __MetadataBearer;
export declare class IssueCertificateCommand extends $Command<IssueCertificateCommandInput, IssueCertificateCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: IssueCertificateCommandInput;
    constructor(input: IssueCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IssueCertificateCommandInput, IssueCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
