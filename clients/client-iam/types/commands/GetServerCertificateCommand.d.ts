import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetServerCertificateRequest, GetServerCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetServerCertificateCommandInput = GetServerCertificateRequest;
export declare type GetServerCertificateCommandOutput = GetServerCertificateResponse & __MetadataBearer;
export declare class GetServerCertificateCommand extends $Command<GetServerCertificateCommandInput, GetServerCertificateCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetServerCertificateCommandInput;
    constructor(input: GetServerCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServerCertificateCommandInput, GetServerCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
