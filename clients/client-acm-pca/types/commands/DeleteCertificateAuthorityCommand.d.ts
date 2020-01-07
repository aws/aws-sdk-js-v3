import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { DeleteCertificateAuthorityRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCertificateAuthorityCommandInput = DeleteCertificateAuthorityRequest;
export declare type DeleteCertificateAuthorityCommandOutput = __MetadataBearer;
export declare class DeleteCertificateAuthorityCommand extends $Command<DeleteCertificateAuthorityCommandInput, DeleteCertificateAuthorityCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: DeleteCertificateAuthorityCommandInput;
    constructor(input: DeleteCertificateAuthorityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCertificateAuthorityCommandInput, DeleteCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
