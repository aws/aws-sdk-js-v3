import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { ModifyReplicationSubnetGroupMessage, ModifyReplicationSubnetGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyReplicationSubnetGroupCommandInput = ModifyReplicationSubnetGroupMessage;
export declare type ModifyReplicationSubnetGroupCommandOutput = ModifyReplicationSubnetGroupResponse & __MetadataBearer;
export declare class ModifyReplicationSubnetGroupCommand extends $Command<ModifyReplicationSubnetGroupCommandInput, ModifyReplicationSubnetGroupCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: ModifyReplicationSubnetGroupCommandInput;
    constructor(input: ModifyReplicationSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReplicationSubnetGroupCommandInput, ModifyReplicationSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
