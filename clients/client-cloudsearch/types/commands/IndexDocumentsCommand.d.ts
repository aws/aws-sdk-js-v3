import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { IndexDocumentsRequest, IndexDocumentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type IndexDocumentsCommandInput = IndexDocumentsRequest;
export declare type IndexDocumentsCommandOutput = IndexDocumentsResponse & __MetadataBearer;
export declare class IndexDocumentsCommand extends $Command<IndexDocumentsCommandInput, IndexDocumentsCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: IndexDocumentsCommandInput;
    constructor(input: IndexDocumentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IndexDocumentsCommandInput, IndexDocumentsCommandOutput>;
    private serialize;
    private deserialize;
}
