import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListDocumentsRequest, ListDocumentsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDocumentsCommandInput = ListDocumentsRequest;
export declare type ListDocumentsCommandOutput = ListDocumentsResult & __MetadataBearer;
export declare class ListDocumentsCommand extends $Command<ListDocumentsCommandInput, ListDocumentsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListDocumentsCommandInput;
    constructor(input: ListDocumentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDocumentsCommandInput, ListDocumentsCommandOutput>;
    private serialize;
    private deserialize;
}
