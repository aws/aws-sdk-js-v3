import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { ListFindingsRequest, ListFindingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFindingsCommandInput = ListFindingsRequest;
export declare type ListFindingsCommandOutput = ListFindingsResponse & __MetadataBearer;
export declare class ListFindingsCommand extends $Command<ListFindingsCommandInput, ListFindingsCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: ListFindingsCommandInput;
    constructor(input: ListFindingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFindingsCommandInput, ListFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
