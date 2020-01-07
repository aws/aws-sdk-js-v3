import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { CreateEventBusRequest, CreateEventBusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEventBusCommandInput = CreateEventBusRequest;
export declare type CreateEventBusCommandOutput = CreateEventBusResponse & __MetadataBearer;
export declare class CreateEventBusCommand extends $Command<CreateEventBusCommandInput, CreateEventBusCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: CreateEventBusCommandInput;
    constructor(input: CreateEventBusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEventBusCommandInput, CreateEventBusCommandOutput>;
    private serialize;
    private deserialize;
}
