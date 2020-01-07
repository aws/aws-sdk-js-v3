import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ListTagsForCertificateRequest, ListTagsForCertificateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsForCertificateCommandInput = ListTagsForCertificateRequest;
export declare type ListTagsForCertificateCommandOutput = ListTagsForCertificateResponse & __MetadataBearer;
export declare class ListTagsForCertificateCommand extends $Command<ListTagsForCertificateCommandInput, ListTagsForCertificateCommandOutput, ACMClientResolvedConfig> {
    readonly input: ListTagsForCertificateCommandInput;
    constructor(input: ListTagsForCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForCertificateCommandInput, ListTagsForCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
