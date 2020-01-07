import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListPartnerEventSourcesRequest, ListPartnerEventSourcesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPartnerEventSourcesCommandInput = ListPartnerEventSourcesRequest;
export declare type ListPartnerEventSourcesCommandOutput = ListPartnerEventSourcesResponse & __MetadataBearer;
export declare class ListPartnerEventSourcesCommand extends $Command<ListPartnerEventSourcesCommandInput, ListPartnerEventSourcesCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ListPartnerEventSourcesCommandInput;
    constructor(input: ListPartnerEventSourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPartnerEventSourcesCommandInput, ListPartnerEventSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
