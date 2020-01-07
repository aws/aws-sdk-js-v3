import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { ReloadTablesMessage, ReloadTablesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReloadTablesCommandInput = ReloadTablesMessage;
export declare type ReloadTablesCommandOutput = ReloadTablesResponse & __MetadataBearer;
export declare class ReloadTablesCommand extends $Command<ReloadTablesCommandInput, ReloadTablesCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: ReloadTablesCommandInput;
    constructor(input: ReloadTablesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReloadTablesCommandInput, ReloadTablesCommandOutput>;
    private serialize;
    private deserialize;
}
