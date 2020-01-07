import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { CreateReplicationTaskMessage, CreateReplicationTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateReplicationTaskCommandInput = CreateReplicationTaskMessage;
export declare type CreateReplicationTaskCommandOutput = CreateReplicationTaskResponse & __MetadataBearer;
export declare class CreateReplicationTaskCommand extends $Command<CreateReplicationTaskCommandInput, CreateReplicationTaskCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: CreateReplicationTaskCommandInput;
    constructor(input: CreateReplicationTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReplicationTaskCommandInput, CreateReplicationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
