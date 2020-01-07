import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { RequestCertificateRequest, RequestCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RequestCertificateCommandInput = RequestCertificateRequest;
export declare type RequestCertificateCommandOutput = RequestCertificateResponse & __MetadataBearer;
export declare class RequestCertificateCommand extends $Command<RequestCertificateCommandInput, RequestCertificateCommandOutput, ACMClientResolvedConfig> {
    readonly input: RequestCertificateCommandInput;
    constructor(input: RequestCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RequestCertificateCommandInput, RequestCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
