import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListEventSourcesRequest, ListEventSourcesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEventSourcesCommandInput = ListEventSourcesRequest;
export declare type ListEventSourcesCommandOutput = ListEventSourcesResponse & __MetadataBearer;
export declare class ListEventSourcesCommand extends $Command<ListEventSourcesCommandInput, ListEventSourcesCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ListEventSourcesCommandInput;
    constructor(input: ListEventSourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEventSourcesCommandInput, ListEventSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
