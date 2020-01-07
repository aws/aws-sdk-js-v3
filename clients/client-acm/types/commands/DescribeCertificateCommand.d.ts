import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { DescribeCertificateRequest, DescribeCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCertificateCommandInput = DescribeCertificateRequest;
export declare type DescribeCertificateCommandOutput = DescribeCertificateResponse & __MetadataBearer;
export declare class DescribeCertificateCommand extends $Command<DescribeCertificateCommandInput, DescribeCertificateCommandOutput, ACMClientResolvedConfig> {
    readonly input: DescribeCertificateCommandInput;
    constructor(input: DescribeCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCertificateCommandInput, DescribeCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
