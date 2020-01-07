import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTableVersionRequest, GetTableVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTableVersionCommandInput = GetTableVersionRequest;
export declare type GetTableVersionCommandOutput = GetTableVersionResponse & __MetadataBearer;
export declare class GetTableVersionCommand extends $Command<GetTableVersionCommandInput, GetTableVersionCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTableVersionCommandInput;
    constructor(input: GetTableVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTableVersionCommandInput, GetTableVersionCommandOutput>;
    private serialize;
    private deserialize;
}
