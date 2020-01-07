import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { ListFaqsRequest, ListFaqsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFaqsCommandInput = ListFaqsRequest;
export declare type ListFaqsCommandOutput = ListFaqsResponse & __MetadataBearer;
export declare class ListFaqsCommand extends $Command<ListFaqsCommandInput, ListFaqsCommandOutput, kendraClientResolvedConfig> {
    readonly input: ListFaqsCommandInput;
    constructor(input: ListFaqsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFaqsCommandInput, ListFaqsCommandOutput>;
    private serialize;
    private deserialize;
}
