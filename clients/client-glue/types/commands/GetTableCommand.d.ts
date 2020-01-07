import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTableRequest, GetTableResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTableCommandInput = GetTableRequest;
export declare type GetTableCommandOutput = GetTableResponse & __MetadataBearer;
export declare class GetTableCommand extends $Command<GetTableCommandInput, GetTableCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTableCommandInput;
    constructor(input: GetTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTableCommandInput, GetTableCommandOutput>;
    private serialize;
    private deserialize;
}
