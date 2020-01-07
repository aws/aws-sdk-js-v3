import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { SubscribeToEventRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SubscribeToEventCommandInput = SubscribeToEventRequest;
export declare type SubscribeToEventCommandOutput = __MetadataBearer;
export declare class SubscribeToEventCommand extends $Command<SubscribeToEventCommandInput, SubscribeToEventCommandOutput, InspectorClientResolvedConfig> {
    readonly input: SubscribeToEventCommandInput;
    constructor(input: SubscribeToEventCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SubscribeToEventCommandInput, SubscribeToEventCommandOutput>;
    private serialize;
    private deserialize;
}
