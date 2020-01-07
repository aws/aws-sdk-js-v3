import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { ModifyReplicationInstanceMessage, ModifyReplicationInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyReplicationInstanceCommandInput = ModifyReplicationInstanceMessage;
export declare type ModifyReplicationInstanceCommandOutput = ModifyReplicationInstanceResponse & __MetadataBearer;
export declare class ModifyReplicationInstanceCommand extends $Command<ModifyReplicationInstanceCommandInput, ModifyReplicationInstanceCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: ModifyReplicationInstanceCommandInput;
    constructor(input: ModifyReplicationInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReplicationInstanceCommandInput, ModifyReplicationInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
