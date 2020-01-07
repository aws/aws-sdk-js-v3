import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateSigningCertificateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSigningCertificateCommandInput = UpdateSigningCertificateRequest;
export declare type UpdateSigningCertificateCommandOutput = __MetadataBearer;
export declare class UpdateSigningCertificateCommand extends $Command<UpdateSigningCertificateCommandInput, UpdateSigningCertificateCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateSigningCertificateCommandInput;
    constructor(input: UpdateSigningCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSigningCertificateCommandInput, UpdateSigningCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
