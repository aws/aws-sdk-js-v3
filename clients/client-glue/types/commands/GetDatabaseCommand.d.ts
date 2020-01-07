import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDatabaseRequest, GetDatabaseResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDatabaseCommandInput = GetDatabaseRequest;
export declare type GetDatabaseCommandOutput = GetDatabaseResponse & __MetadataBearer;
export declare class GetDatabaseCommand extends $Command<GetDatabaseCommandInput, GetDatabaseCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetDatabaseCommandInput;
    constructor(input: GetDatabaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDatabaseCommandInput, GetDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
