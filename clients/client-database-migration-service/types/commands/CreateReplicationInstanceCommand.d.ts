import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { CreateReplicationInstanceMessage, CreateReplicationInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateReplicationInstanceCommandInput = CreateReplicationInstanceMessage;
export declare type CreateReplicationInstanceCommandOutput = CreateReplicationInstanceResponse & __MetadataBearer;
export declare class CreateReplicationInstanceCommand extends $Command<CreateReplicationInstanceCommandInput, CreateReplicationInstanceCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: CreateReplicationInstanceCommandInput;
    constructor(input: CreateReplicationInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReplicationInstanceCommandInput, CreateReplicationInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
