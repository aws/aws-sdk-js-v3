import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ImportMigrationTaskRequest, ImportMigrationTaskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportMigrationTaskCommandInput = ImportMigrationTaskRequest;
export declare type ImportMigrationTaskCommandOutput = ImportMigrationTaskResult & __MetadataBearer;
export declare class ImportMigrationTaskCommand extends $Command<ImportMigrationTaskCommandInput, ImportMigrationTaskCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: ImportMigrationTaskCommandInput;
    constructor(input: ImportMigrationTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportMigrationTaskCommandInput, ImportMigrationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
