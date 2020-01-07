import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UploadSigningCertificateRequest, UploadSigningCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UploadSigningCertificateCommandInput = UploadSigningCertificateRequest;
export declare type UploadSigningCertificateCommandOutput = UploadSigningCertificateResponse & __MetadataBearer;
export declare class UploadSigningCertificateCommand extends $Command<UploadSigningCertificateCommandInput, UploadSigningCertificateCommandOutput, IAMClientResolvedConfig> {
    readonly input: UploadSigningCertificateCommandInput;
    constructor(input: UploadSigningCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UploadSigningCertificateCommandInput, UploadSigningCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
