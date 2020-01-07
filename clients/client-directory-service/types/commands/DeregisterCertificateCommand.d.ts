import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeregisterCertificateRequest, DeregisterCertificateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterCertificateCommandInput = DeregisterCertificateRequest;
export declare type DeregisterCertificateCommandOutput = DeregisterCertificateResult & __MetadataBearer;
export declare class DeregisterCertificateCommand extends $Command<DeregisterCertificateCommandInput, DeregisterCertificateCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DeregisterCertificateCommandInput;
    constructor(input: DeregisterCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterCertificateCommandInput, DeregisterCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
