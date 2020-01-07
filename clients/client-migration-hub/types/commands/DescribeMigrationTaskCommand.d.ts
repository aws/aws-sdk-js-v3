import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DescribeMigrationTaskRequest, DescribeMigrationTaskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMigrationTaskCommandInput = DescribeMigrationTaskRequest;
export declare type DescribeMigrationTaskCommandOutput = DescribeMigrationTaskResult & __MetadataBearer;
export declare class DescribeMigrationTaskCommand extends $Command<DescribeMigrationTaskCommandInput, DescribeMigrationTaskCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: DescribeMigrationTaskCommandInput;
    constructor(input: DescribeMigrationTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMigrationTaskCommandInput, DescribeMigrationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
