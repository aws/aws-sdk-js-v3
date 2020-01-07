import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ListCertificatesRequest, ListCertificatesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCertificatesCommandInput = ListCertificatesRequest;
export declare type ListCertificatesCommandOutput = ListCertificatesResult & __MetadataBearer;
export declare class ListCertificatesCommand extends $Command<ListCertificatesCommandInput, ListCertificatesCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: ListCertificatesCommandInput;
    constructor(input: ListCertificatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCertificatesCommandInput, ListCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
