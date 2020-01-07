import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ListCertificatesRequest, ListCertificatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCertificatesCommandInput = ListCertificatesRequest;
export declare type ListCertificatesCommandOutput = ListCertificatesResponse & __MetadataBearer;
export declare class ListCertificatesCommand extends $Command<ListCertificatesCommandInput, ListCertificatesCommandOutput, ACMClientResolvedConfig> {
    readonly input: ListCertificatesCommandInput;
    constructor(input: ListCertificatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCertificatesCommandInput, ListCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
