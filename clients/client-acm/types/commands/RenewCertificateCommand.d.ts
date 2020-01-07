import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { RenewCertificateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RenewCertificateCommandInput = RenewCertificateRequest;
export declare type RenewCertificateCommandOutput = __MetadataBearer;
export declare class RenewCertificateCommand extends $Command<RenewCertificateCommandInput, RenewCertificateCommandOutput, ACMClientResolvedConfig> {
    readonly input: RenewCertificateCommandInput;
    constructor(input: RenewCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RenewCertificateCommandInput, RenewCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
