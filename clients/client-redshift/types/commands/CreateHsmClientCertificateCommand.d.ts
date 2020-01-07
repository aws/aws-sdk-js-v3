import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateHsmClientCertificateMessage, CreateHsmClientCertificateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHsmClientCertificateCommandInput = CreateHsmClientCertificateMessage;
export declare type CreateHsmClientCertificateCommandOutput = CreateHsmClientCertificateResult & __MetadataBearer;
export declare class CreateHsmClientCertificateCommand extends $Command<CreateHsmClientCertificateCommandInput, CreateHsmClientCertificateCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateHsmClientCertificateCommandInput;
    constructor(input: CreateHsmClientCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHsmClientCertificateCommandInput, CreateHsmClientCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
