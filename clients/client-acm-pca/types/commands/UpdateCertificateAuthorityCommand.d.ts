import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { UpdateCertificateAuthorityRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCertificateAuthorityCommandInput = UpdateCertificateAuthorityRequest;
export declare type UpdateCertificateAuthorityCommandOutput = __MetadataBearer;
export declare class UpdateCertificateAuthorityCommand extends $Command<UpdateCertificateAuthorityCommandInput, UpdateCertificateAuthorityCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: UpdateCertificateAuthorityCommandInput;
    constructor(input: UpdateCertificateAuthorityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCertificateAuthorityCommandInput, UpdateCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
