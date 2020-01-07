import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { ListCertificateAuthoritiesRequest, ListCertificateAuthoritiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCertificateAuthoritiesCommandInput = ListCertificateAuthoritiesRequest;
export declare type ListCertificateAuthoritiesCommandOutput = ListCertificateAuthoritiesResponse & __MetadataBearer;
export declare class ListCertificateAuthoritiesCommand extends $Command<ListCertificateAuthoritiesCommandInput, ListCertificateAuthoritiesCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: ListCertificateAuthoritiesCommandInput;
    constructor(input: ListCertificateAuthoritiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCertificateAuthoritiesCommandInput, ListCertificateAuthoritiesCommandOutput>;
    private serialize;
    private deserialize;
}
