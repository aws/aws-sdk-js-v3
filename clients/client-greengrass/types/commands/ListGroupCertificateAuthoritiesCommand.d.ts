import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListGroupCertificateAuthoritiesRequest, ListGroupCertificateAuthoritiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGroupCertificateAuthoritiesCommandInput = ListGroupCertificateAuthoritiesRequest;
export declare type ListGroupCertificateAuthoritiesCommandOutput = ListGroupCertificateAuthoritiesResponse & __MetadataBearer;
export declare class ListGroupCertificateAuthoritiesCommand extends $Command<ListGroupCertificateAuthoritiesCommandInput, ListGroupCertificateAuthoritiesCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListGroupCertificateAuthoritiesCommandInput;
    constructor(input: ListGroupCertificateAuthoritiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGroupCertificateAuthoritiesCommandInput, ListGroupCertificateAuthoritiesCommandOutput>;
    private serialize;
    private deserialize;
}
