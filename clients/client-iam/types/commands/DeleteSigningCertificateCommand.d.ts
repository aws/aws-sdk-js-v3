import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteSigningCertificateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSigningCertificateCommandInput = DeleteSigningCertificateRequest;
export declare type DeleteSigningCertificateCommandOutput = __MetadataBearer;
export declare class DeleteSigningCertificateCommand extends $Command<DeleteSigningCertificateCommandInput, DeleteSigningCertificateCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteSigningCertificateCommandInput;
    constructor(input: DeleteSigningCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSigningCertificateCommandInput, DeleteSigningCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
