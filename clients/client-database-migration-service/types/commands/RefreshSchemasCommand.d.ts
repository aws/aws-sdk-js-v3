import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { RefreshSchemasMessage, RefreshSchemasResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RefreshSchemasCommandInput = RefreshSchemasMessage;
export declare type RefreshSchemasCommandOutput = RefreshSchemasResponse & __MetadataBearer;
export declare class RefreshSchemasCommand extends $Command<RefreshSchemasCommandInput, RefreshSchemasCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: RefreshSchemasCommandInput;
    constructor(input: RefreshSchemasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RefreshSchemasCommandInput, RefreshSchemasCommandOutput>;
    private serialize;
    private deserialize;
}
