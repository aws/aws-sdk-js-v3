import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DeleteReplicationTaskMessage, DeleteReplicationTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReplicationTaskCommandInput = DeleteReplicationTaskMessage;
export declare type DeleteReplicationTaskCommandOutput = DeleteReplicationTaskResponse & __MetadataBearer;
export declare class DeleteReplicationTaskCommand extends $Command<DeleteReplicationTaskCommandInput, DeleteReplicationTaskCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DeleteReplicationTaskCommandInput;
    constructor(input: DeleteReplicationTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReplicationTaskCommandInput, DeleteReplicationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
