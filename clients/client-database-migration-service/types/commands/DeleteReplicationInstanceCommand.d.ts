import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DeleteReplicationInstanceMessage, DeleteReplicationInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReplicationInstanceCommandInput = DeleteReplicationInstanceMessage;
export declare type DeleteReplicationInstanceCommandOutput = DeleteReplicationInstanceResponse & __MetadataBearer;
export declare class DeleteReplicationInstanceCommand extends $Command<DeleteReplicationInstanceCommandInput, DeleteReplicationInstanceCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DeleteReplicationInstanceCommandInput;
    constructor(input: DeleteReplicationInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReplicationInstanceCommandInput, DeleteReplicationInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
