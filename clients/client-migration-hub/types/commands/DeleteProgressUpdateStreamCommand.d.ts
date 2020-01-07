import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DeleteProgressUpdateStreamRequest, DeleteProgressUpdateStreamResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteProgressUpdateStreamCommandInput = DeleteProgressUpdateStreamRequest;
export declare type DeleteProgressUpdateStreamCommandOutput = DeleteProgressUpdateStreamResult & __MetadataBearer;
export declare class DeleteProgressUpdateStreamCommand extends $Command<DeleteProgressUpdateStreamCommandInput, DeleteProgressUpdateStreamCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: DeleteProgressUpdateStreamCommandInput;
    constructor(input: DeleteProgressUpdateStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProgressUpdateStreamCommandInput, DeleteProgressUpdateStreamCommandOutput>;
    private serialize;
    private deserialize;
}
