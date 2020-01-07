import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { GetCertificateRequest, GetCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCertificateCommandInput = GetCertificateRequest;
export declare type GetCertificateCommandOutput = GetCertificateResponse & __MetadataBearer;
export declare class GetCertificateCommand extends $Command<GetCertificateCommandInput, GetCertificateCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: GetCertificateCommandInput;
    constructor(input: GetCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCertificateCommandInput, GetCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
