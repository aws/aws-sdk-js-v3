import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CertificateMessage, DescribeCertificatesMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCertificatesCommandInput = DescribeCertificatesMessage;
export declare type DescribeCertificatesCommandOutput = CertificateMessage & __MetadataBearer;
export declare class DescribeCertificatesCommand extends $Command<DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DescribeCertificatesCommandInput;
    constructor(input: DescribeCertificatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
