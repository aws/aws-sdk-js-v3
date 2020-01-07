import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { DeleteCertificateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCertificateCommandInput = DeleteCertificateRequest;
export declare type DeleteCertificateCommandOutput = __MetadataBearer;
export declare class DeleteCertificateCommand extends $Command<DeleteCertificateCommandInput, DeleteCertificateCommandOutput, ACMClientResolvedConfig> {
    readonly input: DeleteCertificateCommandInput;
    constructor(input: DeleteCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCertificateCommandInput, DeleteCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
