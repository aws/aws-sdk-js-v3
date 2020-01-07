import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateDatabaseRequest, CreateDatabaseResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDatabaseCommandInput = CreateDatabaseRequest;
export declare type CreateDatabaseCommandOutput = CreateDatabaseResponse & __MetadataBearer;
export declare class CreateDatabaseCommand extends $Command<CreateDatabaseCommandInput, CreateDatabaseCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateDatabaseCommandInput;
    constructor(input: CreateDatabaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDatabaseCommandInput, CreateDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
