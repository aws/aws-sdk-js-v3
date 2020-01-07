import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { NotifyMigrationTaskStateRequest, NotifyMigrationTaskStateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type NotifyMigrationTaskStateCommandInput = NotifyMigrationTaskStateRequest;
export declare type NotifyMigrationTaskStateCommandOutput = NotifyMigrationTaskStateResult & __MetadataBearer;
export declare class NotifyMigrationTaskStateCommand extends $Command<NotifyMigrationTaskStateCommandInput, NotifyMigrationTaskStateCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: NotifyMigrationTaskStateCommandInput;
    constructor(input: NotifyMigrationTaskStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<NotifyMigrationTaskStateCommandInput, NotifyMigrationTaskStateCommandOutput>;
    private serialize;
    private deserialize;
}
