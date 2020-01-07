import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteHsmClientCertificateMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteHsmClientCertificateCommandInput = DeleteHsmClientCertificateMessage;
export declare type DeleteHsmClientCertificateCommandOutput = __MetadataBearer;
export declare class DeleteHsmClientCertificateCommand extends $Command<DeleteHsmClientCertificateCommandInput, DeleteHsmClientCertificateCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteHsmClientCertificateCommandInput;
    constructor(input: DeleteHsmClientCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHsmClientCertificateCommandInput, DeleteHsmClientCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
