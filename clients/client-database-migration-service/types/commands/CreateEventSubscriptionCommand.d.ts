import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { CreateEventSubscriptionMessage, CreateEventSubscriptionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEventSubscriptionCommandInput = CreateEventSubscriptionMessage;
export declare type CreateEventSubscriptionCommandOutput = CreateEventSubscriptionResponse & __MetadataBearer;
export declare class CreateEventSubscriptionCommand extends $Command<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: CreateEventSubscriptionCommandInput;
    constructor(input: CreateEventSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
