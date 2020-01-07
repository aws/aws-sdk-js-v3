import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DeleteEventSubscriptionMessage, DeleteEventSubscriptionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEventSubscriptionCommandInput = DeleteEventSubscriptionMessage;
export declare type DeleteEventSubscriptionCommandOutput = DeleteEventSubscriptionResponse & __MetadataBearer;
export declare class DeleteEventSubscriptionCommand extends $Command<DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DeleteEventSubscriptionCommandInput;
    constructor(input: DeleteEventSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
