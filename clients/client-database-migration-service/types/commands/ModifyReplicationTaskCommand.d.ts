import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { ModifyReplicationTaskMessage, ModifyReplicationTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyReplicationTaskCommandInput = ModifyReplicationTaskMessage;
export declare type ModifyReplicationTaskCommandOutput = ModifyReplicationTaskResponse & __MetadataBearer;
export declare class ModifyReplicationTaskCommand extends $Command<ModifyReplicationTaskCommandInput, ModifyReplicationTaskCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: ModifyReplicationTaskCommandInput;
    constructor(input: ModifyReplicationTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReplicationTaskCommandInput, ModifyReplicationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
