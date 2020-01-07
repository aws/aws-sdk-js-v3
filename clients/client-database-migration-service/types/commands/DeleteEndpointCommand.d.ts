import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DeleteEndpointMessage, DeleteEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEndpointCommandInput = DeleteEndpointMessage;
export declare type DeleteEndpointCommandOutput = DeleteEndpointResponse & __MetadataBearer;
export declare class DeleteEndpointCommand extends $Command<DeleteEndpointCommandInput, DeleteEndpointCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DeleteEndpointCommandInput;
    constructor(input: DeleteEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEndpointCommandInput, DeleteEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
