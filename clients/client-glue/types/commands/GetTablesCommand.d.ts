import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTablesRequest, GetTablesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTablesCommandInput = GetTablesRequest;
export declare type GetTablesCommandOutput = GetTablesResponse & __MetadataBearer;
export declare class GetTablesCommand extends $Command<GetTablesCommandInput, GetTablesCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTablesCommandInput;
    constructor(input: GetTablesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTablesCommandInput, GetTablesCommandOutput>;
    private serialize;
    private deserialize;
}
