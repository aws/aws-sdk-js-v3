import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListDocumentVersionsRequest, ListDocumentVersionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDocumentVersionsCommandInput = ListDocumentVersionsRequest;
export declare type ListDocumentVersionsCommandOutput = ListDocumentVersionsResult & __MetadataBearer;
export declare class ListDocumentVersionsCommand extends $Command<ListDocumentVersionsCommandInput, ListDocumentVersionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListDocumentVersionsCommandInput;
    constructor(input: ListDocumentVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDocumentVersionsCommandInput, ListDocumentVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
