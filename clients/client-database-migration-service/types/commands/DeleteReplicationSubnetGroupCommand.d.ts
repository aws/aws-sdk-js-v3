import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DeleteReplicationSubnetGroupMessage, DeleteReplicationSubnetGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteReplicationSubnetGroupCommandInput = DeleteReplicationSubnetGroupMessage;
export declare type DeleteReplicationSubnetGroupCommandOutput = DeleteReplicationSubnetGroupResponse & __MetadataBearer;
export declare class DeleteReplicationSubnetGroupCommand extends $Command<DeleteReplicationSubnetGroupCommandInput, DeleteReplicationSubnetGroupCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DeleteReplicationSubnetGroupCommandInput;
    constructor(input: DeleteReplicationSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReplicationSubnetGroupCommandInput, DeleteReplicationSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
