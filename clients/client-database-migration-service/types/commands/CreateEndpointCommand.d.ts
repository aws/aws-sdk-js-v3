import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { CreateEndpointMessage, CreateEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEndpointCommandInput = CreateEndpointMessage;
export declare type CreateEndpointCommandOutput = CreateEndpointResponse & __MetadataBearer;
export declare class CreateEndpointCommand extends $Command<CreateEndpointCommandInput, CreateEndpointCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: CreateEndpointCommandInput;
    constructor(input: CreateEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEndpointCommandInput, CreateEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
