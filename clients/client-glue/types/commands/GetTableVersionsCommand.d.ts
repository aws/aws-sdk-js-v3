import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTableVersionsRequest, GetTableVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTableVersionsCommandInput = GetTableVersionsRequest;
export declare type GetTableVersionsCommandOutput = GetTableVersionsResponse & __MetadataBearer;
export declare class GetTableVersionsCommand extends $Command<GetTableVersionsCommandInput, GetTableVersionsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTableVersionsCommandInput;
    constructor(input: GetTableVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTableVersionsCommandInput, GetTableVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
