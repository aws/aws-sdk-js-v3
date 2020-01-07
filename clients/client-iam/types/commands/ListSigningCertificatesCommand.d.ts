import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListSigningCertificatesRequest, ListSigningCertificatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSigningCertificatesCommandInput = ListSigningCertificatesRequest;
export declare type ListSigningCertificatesCommandOutput = ListSigningCertificatesResponse & __MetadataBearer;
export declare class ListSigningCertificatesCommand extends $Command<ListSigningCertificatesCommandInput, ListSigningCertificatesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListSigningCertificatesCommandInput;
    constructor(input: ListSigningCertificatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSigningCertificatesCommandInput, ListSigningCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
