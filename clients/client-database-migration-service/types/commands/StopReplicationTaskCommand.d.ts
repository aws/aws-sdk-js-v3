import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { StopReplicationTaskMessage, StopReplicationTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopReplicationTaskCommandInput = StopReplicationTaskMessage;
export declare type StopReplicationTaskCommandOutput = StopReplicationTaskResponse & __MetadataBearer;
export declare class StopReplicationTaskCommand extends $Command<StopReplicationTaskCommandInput, StopReplicationTaskCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: StopReplicationTaskCommandInput;
    constructor(input: StopReplicationTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopReplicationTaskCommandInput, StopReplicationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
