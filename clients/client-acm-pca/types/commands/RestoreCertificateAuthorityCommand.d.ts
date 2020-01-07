import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { RestoreCertificateAuthorityRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreCertificateAuthorityCommandInput = RestoreCertificateAuthorityRequest;
export declare type RestoreCertificateAuthorityCommandOutput = __MetadataBearer;
export declare class RestoreCertificateAuthorityCommand extends $Command<RestoreCertificateAuthorityCommandInput, RestoreCertificateAuthorityCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: RestoreCertificateAuthorityCommandInput;
    constructor(input: RestoreCertificateAuthorityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreCertificateAuthorityCommandInput, RestoreCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
