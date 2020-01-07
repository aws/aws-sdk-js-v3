import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListDocumentClassifiersRequest, ListDocumentClassifiersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDocumentClassifiersCommandInput = ListDocumentClassifiersRequest;
export declare type ListDocumentClassifiersCommandOutput = ListDocumentClassifiersResponse & __MetadataBearer;
export declare class ListDocumentClassifiersCommand extends $Command<ListDocumentClassifiersCommandInput, ListDocumentClassifiersCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListDocumentClassifiersCommandInput;
    constructor(input: ListDocumentClassifiersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDocumentClassifiersCommandInput, ListDocumentClassifiersCommandOutput>;
    private serialize;
    private deserialize;
}
