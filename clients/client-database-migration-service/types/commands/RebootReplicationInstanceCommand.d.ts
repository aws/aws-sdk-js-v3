import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { RebootReplicationInstanceMessage, RebootReplicationInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RebootReplicationInstanceCommandInput = RebootReplicationInstanceMessage;
export declare type RebootReplicationInstanceCommandOutput = RebootReplicationInstanceResponse & __MetadataBearer;
export declare class RebootReplicationInstanceCommand extends $Command<RebootReplicationInstanceCommandInput, RebootReplicationInstanceCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: RebootReplicationInstanceCommandInput;
    constructor(input: RebootReplicationInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootReplicationInstanceCommandInput, RebootReplicationInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
