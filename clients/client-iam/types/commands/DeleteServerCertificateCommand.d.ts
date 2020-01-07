import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteServerCertificateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteServerCertificateCommandInput = DeleteServerCertificateRequest;
export declare type DeleteServerCertificateCommandOutput = __MetadataBearer;
export declare class DeleteServerCertificateCommand extends $Command<DeleteServerCertificateCommandInput, DeleteServerCertificateCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteServerCertificateCommandInput;
    constructor(input: DeleteServerCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServerCertificateCommandInput, DeleteServerCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
