import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateScriptInput, CreateScriptOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateScriptCommandInput = CreateScriptInput;
export declare type CreateScriptCommandOutput = CreateScriptOutput & __MetadataBearer;
export declare class CreateScriptCommand extends $Command<CreateScriptCommandInput, CreateScriptCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateScriptCommandInput;
    constructor(input: CreateScriptCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateScriptCommandInput, CreateScriptCommandOutput>;
    private serialize;
    private deserialize;
}
