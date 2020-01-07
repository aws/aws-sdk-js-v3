import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateRelationalDatabaseRequest, CreateRelationalDatabaseResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRelationalDatabaseCommandInput = CreateRelationalDatabaseRequest;
export declare type CreateRelationalDatabaseCommandOutput = CreateRelationalDatabaseResult & __MetadataBearer;
export declare class CreateRelationalDatabaseCommand extends $Command<CreateRelationalDatabaseCommandInput, CreateRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateRelationalDatabaseCommandInput;
    constructor(input: CreateRelationalDatabaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRelationalDatabaseCommandInput, CreateRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
