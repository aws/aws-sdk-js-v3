import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeHsmClientCertificatesMessage, HsmClientCertificateMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHsmClientCertificatesCommandInput = DescribeHsmClientCertificatesMessage;
export declare type DescribeHsmClientCertificatesCommandOutput = HsmClientCertificateMessage & __MetadataBearer;
export declare class DescribeHsmClientCertificatesCommand extends $Command<DescribeHsmClientCertificatesCommandInput, DescribeHsmClientCertificatesCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeHsmClientCertificatesCommandInput;
    constructor(input: DescribeHsmClientCertificatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHsmClientCertificatesCommandInput, DescribeHsmClientCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
