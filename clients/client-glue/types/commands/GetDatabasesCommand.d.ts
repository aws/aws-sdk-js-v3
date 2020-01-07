import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDatabasesRequest, GetDatabasesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDatabasesCommandInput = GetDatabasesRequest;
export declare type GetDatabasesCommandOutput = GetDatabasesResponse & __MetadataBearer;
export declare class GetDatabasesCommand extends $Command<GetDatabasesCommandInput, GetDatabasesCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetDatabasesCommandInput;
    constructor(input: GetDatabasesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDatabasesCommandInput, GetDatabasesCommandOutput>;
    private serialize;
    private deserialize;
}
