import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { CreateProgressUpdateStreamRequest, CreateProgressUpdateStreamResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateProgressUpdateStreamCommandInput = CreateProgressUpdateStreamRequest;
export declare type CreateProgressUpdateStreamCommandOutput = CreateProgressUpdateStreamResult & __MetadataBearer;
export declare class CreateProgressUpdateStreamCommand extends $Command<CreateProgressUpdateStreamCommandInput, CreateProgressUpdateStreamCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: CreateProgressUpdateStreamCommandInput;
    constructor(input: CreateProgressUpdateStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProgressUpdateStreamCommandInput, CreateProgressUpdateStreamCommandOutput>;
    private serialize;
    private deserialize;
}
