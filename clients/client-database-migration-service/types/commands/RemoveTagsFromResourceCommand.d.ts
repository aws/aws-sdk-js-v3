import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { RemoveTagsFromResourceMessage, RemoveTagsFromResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTagsFromResourceCommandInput = RemoveTagsFromResourceMessage;
export declare type RemoveTagsFromResourceCommandOutput = RemoveTagsFromResourceResponse & __MetadataBearer;
export declare class RemoveTagsFromResourceCommand extends $Command<RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: RemoveTagsFromResourceCommandInput;
    constructor(input: RemoveTagsFromResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput>;
    private serialize;
    private deserialize;
}
