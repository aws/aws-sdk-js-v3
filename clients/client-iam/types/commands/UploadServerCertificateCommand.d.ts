import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UploadServerCertificateRequest, UploadServerCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UploadServerCertificateCommandInput = UploadServerCertificateRequest;
export declare type UploadServerCertificateCommandOutput = UploadServerCertificateResponse & __MetadataBearer;
export declare class UploadServerCertificateCommand extends $Command<UploadServerCertificateCommandInput, UploadServerCertificateCommandOutput, IAMClientResolvedConfig> {
    readonly input: UploadServerCertificateCommandInput;
    constructor(input: UploadServerCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UploadServerCertificateCommandInput, UploadServerCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
