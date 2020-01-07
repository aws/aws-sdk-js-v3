import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateDatabaseRequest, UpdateDatabaseResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDatabaseCommandInput = UpdateDatabaseRequest;
export declare type UpdateDatabaseCommandOutput = UpdateDatabaseResponse & __MetadataBearer;
export declare class UpdateDatabaseCommand extends $Command<UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateDatabaseCommandInput;
    constructor(input: UpdateDatabaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
