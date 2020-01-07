import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteDatabaseRequest, DeleteDatabaseResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDatabaseCommandInput = DeleteDatabaseRequest;
export declare type DeleteDatabaseCommandOutput = DeleteDatabaseResponse & __MetadataBearer;
export declare class DeleteDatabaseCommand extends $Command<DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteDatabaseCommandInput;
    constructor(input: DeleteDatabaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
