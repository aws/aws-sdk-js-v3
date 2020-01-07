import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { UntagCertificateAuthorityRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UntagCertificateAuthorityCommandInput = UntagCertificateAuthorityRequest;
export declare type UntagCertificateAuthorityCommandOutput = __MetadataBearer;
export declare class UntagCertificateAuthorityCommand extends $Command<UntagCertificateAuthorityCommandInput, UntagCertificateAuthorityCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: UntagCertificateAuthorityCommandInput;
    constructor(input: UntagCertificateAuthorityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagCertificateAuthorityCommandInput, UntagCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
