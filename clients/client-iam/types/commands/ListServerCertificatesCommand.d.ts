import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListServerCertificatesRequest, ListServerCertificatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListServerCertificatesCommandInput = ListServerCertificatesRequest;
export declare type ListServerCertificatesCommandOutput = ListServerCertificatesResponse & __MetadataBearer;
export declare class ListServerCertificatesCommand extends $Command<ListServerCertificatesCommandInput, ListServerCertificatesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListServerCertificatesCommandInput;
    constructor(input: ListServerCertificatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServerCertificatesCommandInput, ListServerCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
