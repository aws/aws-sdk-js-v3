import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { RevokeCertificateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeCertificateCommandInput = RevokeCertificateRequest;
export declare type RevokeCertificateCommandOutput = __MetadataBearer;
export declare class RevokeCertificateCommand extends $Command<RevokeCertificateCommandInput, RevokeCertificateCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: RevokeCertificateCommandInput;
    constructor(input: RevokeCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeCertificateCommandInput, RevokeCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
