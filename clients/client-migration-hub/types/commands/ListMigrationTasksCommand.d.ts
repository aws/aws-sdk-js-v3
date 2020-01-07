import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListMigrationTasksRequest, ListMigrationTasksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMigrationTasksCommandInput = ListMigrationTasksRequest;
export declare type ListMigrationTasksCommandOutput = ListMigrationTasksResult & __MetadataBearer;
export declare class ListMigrationTasksCommand extends $Command<ListMigrationTasksCommandInput, ListMigrationTasksCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: ListMigrationTasksCommandInput;
    constructor(input: ListMigrationTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMigrationTasksCommandInput, ListMigrationTasksCommandOutput>;
    private serialize;
    private deserialize;
}
