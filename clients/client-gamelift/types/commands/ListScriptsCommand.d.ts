import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListScriptsInput, ListScriptsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListScriptsCommandInput = ListScriptsInput;
export declare type ListScriptsCommandOutput = ListScriptsOutput & __MetadataBearer;
export declare class ListScriptsCommand extends $Command<ListScriptsCommandInput, ListScriptsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: ListScriptsCommandInput;
    constructor(input: ListScriptsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListScriptsCommandInput, ListScriptsCommandOutput>;
    private serialize;
    private deserialize;
}
