import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { StartReplicationTaskMessage, StartReplicationTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartReplicationTaskCommandInput = StartReplicationTaskMessage;
export declare type StartReplicationTaskCommandOutput = StartReplicationTaskResponse & __MetadataBearer;
export declare class StartReplicationTaskCommand extends $Command<StartReplicationTaskCommandInput, StartReplicationTaskCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: StartReplicationTaskCommandInput;
    constructor(input: StartReplicationTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartReplicationTaskCommandInput, StartReplicationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
