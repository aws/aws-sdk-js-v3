import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetConnectionsRequest, GetConnectionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConnectionsCommandInput = GetConnectionsRequest;
export declare type GetConnectionsCommandOutput = GetConnectionsResponse & __MetadataBearer;
export declare class GetConnectionsCommand extends $Command<GetConnectionsCommandInput, GetConnectionsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetConnectionsCommandInput;
    constructor(input: GetConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectionsCommandInput, GetConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
