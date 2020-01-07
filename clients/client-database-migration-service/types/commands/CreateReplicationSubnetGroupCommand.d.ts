import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { CreateReplicationSubnetGroupMessage, CreateReplicationSubnetGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateReplicationSubnetGroupCommandInput = CreateReplicationSubnetGroupMessage;
export declare type CreateReplicationSubnetGroupCommandOutput = CreateReplicationSubnetGroupResponse & __MetadataBearer;
export declare class CreateReplicationSubnetGroupCommand extends $Command<CreateReplicationSubnetGroupCommandInput, CreateReplicationSubnetGroupCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: CreateReplicationSubnetGroupCommandInput;
    constructor(input: CreateReplicationSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReplicationSubnetGroupCommandInput, CreateReplicationSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
