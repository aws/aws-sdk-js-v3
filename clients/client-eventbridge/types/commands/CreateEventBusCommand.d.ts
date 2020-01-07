import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { CreateEventBusRequest, CreateEventBusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEventBusCommandInput = CreateEventBusRequest;
export declare type CreateEventBusCommandOutput = CreateEventBusResponse & __MetadataBearer;
export declare class CreateEventBusCommand extends $Command<CreateEventBusCommandInput, CreateEventBusCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: CreateEventBusCommandInput;
    constructor(input: CreateEventBusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEventBusCommandInput, CreateEventBusCommandOutput>;
    private serialize;
    private deserialize;
}
