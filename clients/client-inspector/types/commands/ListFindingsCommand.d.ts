import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListFindingsRequest, ListFindingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFindingsCommandInput = ListFindingsRequest;
export declare type ListFindingsCommandOutput = ListFindingsResponse & __MetadataBearer;
export declare class ListFindingsCommand extends $Command<ListFindingsCommandInput, ListFindingsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: ListFindingsCommandInput;
    constructor(input: ListFindingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFindingsCommandInput, ListFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
