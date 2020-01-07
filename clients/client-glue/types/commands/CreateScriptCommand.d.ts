import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateScriptRequest, CreateScriptResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateScriptCommandInput = CreateScriptRequest;
export declare type CreateScriptCommandOutput = CreateScriptResponse & __MetadataBearer;
export declare class CreateScriptCommand extends $Command<CreateScriptCommandInput, CreateScriptCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateScriptCommandInput;
    constructor(input: CreateScriptCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateScriptCommandInput, CreateScriptCommandOutput>;
    private serialize;
    private deserialize;
}
