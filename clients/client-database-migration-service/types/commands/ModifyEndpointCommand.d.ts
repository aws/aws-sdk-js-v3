import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { ModifyEndpointMessage, ModifyEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyEndpointCommandInput = ModifyEndpointMessage;
export declare type ModifyEndpointCommandOutput = ModifyEndpointResponse & __MetadataBearer;
export declare class ModifyEndpointCommand extends $Command<ModifyEndpointCommandInput, ModifyEndpointCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: ModifyEndpointCommandInput;
    constructor(input: ModifyEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyEndpointCommandInput, ModifyEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
