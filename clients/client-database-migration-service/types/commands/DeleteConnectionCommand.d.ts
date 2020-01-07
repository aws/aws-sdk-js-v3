import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DeleteConnectionMessage, DeleteConnectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConnectionCommandInput = DeleteConnectionMessage;
export declare type DeleteConnectionCommandOutput = DeleteConnectionResponse & __MetadataBearer;
export declare class DeleteConnectionCommand extends $Command<DeleteConnectionCommandInput, DeleteConnectionCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DeleteConnectionCommandInput;
    constructor(input: DeleteConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConnectionCommandInput, DeleteConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
