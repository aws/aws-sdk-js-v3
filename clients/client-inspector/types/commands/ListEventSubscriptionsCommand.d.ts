import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListEventSubscriptionsRequest, ListEventSubscriptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEventSubscriptionsCommandInput = ListEventSubscriptionsRequest;
export declare type ListEventSubscriptionsCommandOutput = ListEventSubscriptionsResponse & __MetadataBearer;
export declare class ListEventSubscriptionsCommand extends $Command<ListEventSubscriptionsCommandInput, ListEventSubscriptionsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: ListEventSubscriptionsCommandInput;
    constructor(input: ListEventSubscriptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEventSubscriptionsCommandInput, ListEventSubscriptionsCommandOutput>;
    private serialize;
    private deserialize;
}
