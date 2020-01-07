import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateEventSubscriptionMessage, CreateEventSubscriptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEventSubscriptionCommandInput = CreateEventSubscriptionMessage;
export declare type CreateEventSubscriptionCommandOutput = CreateEventSubscriptionResult & __MetadataBearer;
export declare class CreateEventSubscriptionCommand extends $Command<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateEventSubscriptionCommandInput;
    constructor(input: CreateEventSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
