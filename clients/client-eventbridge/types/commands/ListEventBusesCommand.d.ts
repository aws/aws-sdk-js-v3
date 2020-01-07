import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListEventBusesRequest, ListEventBusesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEventBusesCommandInput = ListEventBusesRequest;
export declare type ListEventBusesCommandOutput = ListEventBusesResponse & __MetadataBearer;
export declare class ListEventBusesCommand extends $Command<ListEventBusesCommandInput, ListEventBusesCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ListEventBusesCommandInput;
    constructor(input: ListEventBusesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEventBusesCommandInput, ListEventBusesCommandOutput>;
    private serialize;
    private deserialize;
}
