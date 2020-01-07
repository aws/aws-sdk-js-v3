import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { SearchGameSessionsInput, SearchGameSessionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchGameSessionsCommandInput = SearchGameSessionsInput;
export declare type SearchGameSessionsCommandOutput = SearchGameSessionsOutput & __MetadataBearer;
export declare class SearchGameSessionsCommand extends $Command<SearchGameSessionsCommandInput, SearchGameSessionsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: SearchGameSessionsCommandInput;
    constructor(input: SearchGameSessionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchGameSessionsCommandInput, SearchGameSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
